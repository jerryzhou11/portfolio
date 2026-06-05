import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  TILE, VIEW_W, VIEW_H, PLAYER_SPEED, ANIM_FPS,
  PLAYER_BOX_W, PLAYER_BOX_H, HERO_H, INTERACT_RANGE,
  DIR,
} from './constants.js';
import { drawHero, drawDecor, buildRoomBackground } from './draw.js';
import { ROOMS, boxHitsSolid, spawnToPixels, interactableCenter, doorEntry } from './rooms.js';
import DPad, { isTouchDevice } from '../components/DPad.jsx';
import InteractionOverlay from '../components/InteractionOverlay.jsx';
import RoomTransition from '../components/RoomTransition.jsx';

function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

export default function GameWorld({ enableEffects = true }) {
  const canvasRef = useRef(null);
  const inputRef = useRef({ up: false, down: false, left: false, right: false, interact: false });
  const bgCacheRef = useRef({});

  const [overlay, setOverlay] = useState(null);
  const [transition, setTransition] = useState(null); // 'out' | 'in' | null
  const [showHint, setShowHint] = useState(false); // "press to interact" pill
  const [isTouch, setIsTouch] = useState(false);

  // Decide once on mount whether to phrase the hint for touch or keyboard.
  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // Mutable game state (kept in a ref so the loop never reads stale values).
  const gameRef = useRef(null);
  if (!gameRef.current) {
    const sp = spawnToPixels(ROOMS.hub.spawn);
    gameRef.current = {
      roomId: 'hub',
      // Spawn facing up toward the welcome sign that sits one tile above.
      player: { x: sp.x, y: sp.y, dir: DIR.UP, frame: 0, anim: 0, moving: false },
      camX: 0, camY: 0,
      viewW: VIEW_W, viewH: VIEW_H,
      doorCooldown: 0.25,
      overlayCooldown: 0,
      prevInteract: false,
      nearby: null,
      transitioning: false,
      overlayOpen: false,
      _hintShown: false,
      timers: [],
    };
  }

  const closeOverlay = useCallback(() => {
    const g = gameRef.current;
    g.overlayOpen = false;
    g.overlayCooldown = 0.25;
    setOverlay(null);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const g = gameRef.current;
    if (typeof window !== 'undefined' && import.meta.env.DEV) window.__game = g;

    const getRoom = () => ROOMS[g.roomId];
    const ensureBg = (id) => {
      if (!bgCacheRef.current[id]) bgCacheRef.current[id] = buildRoomBackground(ROOMS[id]);
      return bgCacheRef.current[id];
    };
    ensureBg(g.roomId);

    function updateCamera(snap) {
      const room = getRoom();
      const roomW = room.cols * TILE;
      const roomH = room.rows * TILE;
      const vw = g.viewW;
      const vh = g.viewH;
      let tx, ty;
      if (roomW <= vw) tx = (roomW - vw) / 2;
      else tx = Math.max(0, Math.min(g.player.x - vw / 2, roomW - vw));
      if (roomH <= vh) ty = (roomH - vh) / 2;
      else ty = Math.max(0, Math.min(g.player.y - HERO_H / 2 - vh / 2, roomH - vh));
      if (snap) {
        g.camX = tx;
        g.camY = ty;
      } else {
        g.camX += (tx - g.camX) * 0.2;
        g.camY += (ty - g.camY) * 0.2;
      }
    }

    // Make the internal render resolution match the cabinet's aspect ratio so
    // the game fills the whole purple screen (no letterbox bars). Height is
    // fixed (VIEW_H) for a consistent pixel scale; width is derived from the
    // canvas's actual CSS box, then the camera re-clamps to the new viewport.
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const cssW = rect.width || VIEW_W;
      const cssH = rect.height || VIEW_H;
      const vh = VIEW_H;
      // Square pixels by construction: width scales with the cabinet's aspect
      // ratio so the game fills the screen with zero stretch. The floor only
      // guards a degenerate (near-zero) measurement, never a real layout — even
      // a tall mobile cabinet (~0.43 aspect) lands above it, so it never clamps.
      const vw = Math.max(64, Math.round(vh * (cssW / cssH)));
      g.viewW = vw;
      g.viewH = vh;
      canvas.width = vw;
      canvas.height = vh;
      ctx.imageSmoothingEnabled = false; // resizing the backing store clears it
      updateCamera(true);
    }
    resize();
    const ro =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => resize()) : null;
    if (ro) ro.observe(canvas);

    function startTransition(door) {
      g.transitioning = true;
      setTransition('glitch');
      const fromId = g.roomId;
      // Cut the room over under the glitch so the swap is hidden.
      const t1 = setTimeout(() => {
        g.roomId = door.to;
        const room = ROOMS[door.to];
        // Spawn at the doorway that leads back where we came from, so
        // re-entering a room drops you at the door you used (not the centre).
        // Fall back to the room's default entry spawn if there's no match.
        const entry = doorEntry(room, fromId);
        if (entry) {
          g.player.x = entry.x;
          g.player.y = entry.y;
          g.player.dir = entry.dir;
        } else {
          const sp = spawnToPixels(room.entrySpawn || room.spawn);
          g.player.x = sp.x;
          g.player.y = sp.y;
          g.player.dir = DIR.UP;
        }
        g.player.frame = 0;
        g.player.moving = false;
        g.doorCooldown = 0.4;
        g.nearby = null;
        ensureBg(door.to);
        updateCamera(true);
      }, 160);
      g.timers.push(t1);
      // End the glitch.
      const t2 = setTimeout(() => {
        setTransition(null);
        g.transitioning = false;
      }, 420);
      g.timers.push(t2);
    }

    function openOverlay(it) {
      g.overlayOpen = true;
      g.overlayCooldown = 0.35;
      setOverlay(it);
    }

    if (import.meta.env.DEV && typeof window !== 'undefined') {
      window.__api = { openOverlay, startTransition, setTransition, setOverlay, closeOverlay };
    }

    // Show/hide the DOM "press to interact" pill, but only flip React state
    // when it actually changes (this runs every frame).
    function setHint(on) {
      if (on !== g._hintShown) {
        g._hintShown = on;
        setShowHint(on);
      }
    }

    function update(dt) {
      if (g.doorCooldown > 0) g.doorCooldown -= dt;
      if (g.overlayCooldown > 0) g.overlayCooldown -= dt;
      if (g.transitioning) {
        setHint(false);
        return;
      }

      const inp = inputRef.current;
      const interact = !!inp.interact;
      const interactPressed = interact && !g.prevInteract;
      g.prevInteract = interact;

      if (g.overlayOpen) {
        setHint(false);
        if (interactPressed && g.overlayCooldown <= 0) closeOverlay();
        return;
      }

      // --- movement ---
      let dx = 0;
      let dy = 0;
      if (inp.left) dx -= 1;
      if (inp.right) dx += 1;
      if (inp.up) dy -= 1;
      if (inp.down) dy += 1;
      const moving = dx !== 0 || dy !== 0;

      if (moving) {
        const len = Math.hypot(dx, dy) || 1;
        dx /= len;
        dy /= len;
        const dist = PLAYER_SPEED * dt;
        if (Math.abs(dx) > Math.abs(dy)) g.player.dir = dx < 0 ? DIR.LEFT : DIR.RIGHT;
        else g.player.dir = dy < 0 ? DIR.UP : DIR.DOWN;

        const room = getRoom();
        const bw = PLAYER_BOX_W;
        const bh = PLAYER_BOX_H;
        // axis-separated collision against the feet box
        const nx = g.player.x + dx * dist;
        if (!boxHitsSolid(room, nx - bw / 2, g.player.y - bh, bw, bh)) g.player.x = nx;
        const ny = g.player.y + dy * dist;
        if (!boxHitsSolid(room, g.player.x - bw / 2, ny - bh, bw, bh)) g.player.y = ny;

        g.player.anim += dt;
        if (g.player.anim > 1 / ANIM_FPS) {
          g.player.anim = 0;
          g.player.frame = (g.player.frame + 1) % 2;
        }
      } else {
        g.player.frame = 0;
        g.player.anim = 0;
      }
      g.player.moving = moving;

      // --- doors ---
      if (g.doorCooldown <= 0) {
        const room = getRoom();
        const fx = g.player.x - PLAYER_BOX_W / 2;
        const fy = g.player.y - PLAYER_BOX_H;
        for (const door of room.doors || []) {
          if (rectsOverlap(fx, fy, PLAYER_BOX_W, PLAYER_BOX_H, door.x * TILE, door.y * TILE, door.w * TILE, door.h * TILE)) {
            startTransition(door);
            break;
          }
        }
      }

      // --- interactable proximity ---
      const room = getRoom();
      let near = null;
      let best = INTERACT_RANGE;
      for (const it of room.interactables || []) {
        const c = interactableCenter(it);
        const d = Math.hypot(c.x - g.player.x, c.y - (g.player.y - HERO_H / 2));
        if (d < best) {
          best = d;
          near = it;
        }
      }
      g.nearby = near;
      setHint(!!near);
      if (interactPressed && near && g.overlayCooldown <= 0) openOverlay(near);

      updateCamera(false);
    }

    function render() {
      const room = getRoom();
      // Fill any out-of-room void (when the viewport is wider/taller than the
      // room) with the room's own wall colour so it blends, not a black band.
      ctx.fillStyle = (room.theme && room.theme.wall) || '#05040a';
      ctx.fillRect(0, 0, g.viewW, g.viewH);
      ctx.drawImage(ensureBg(room.id), Math.round(-g.camX), Math.round(-g.camY));

      const now = performance.now();
      const pulse = 0.5 + 0.5 * Math.sin(now / 300);

      for (const it of room.interactables || []) {
        const ix = Math.round(it.x * TILE - g.camX);
        const iy = Math.round(it.y * TILE - g.camY);
        drawDecor(ctx, it.art, ix, iy, it);
        if (g.nearby && g.nearby.id === it.id) {
          ctx.globalAlpha = 0.3 + 0.5 * pulse;
          ctx.strokeStyle = '#2DE2E6';
          ctx.lineWidth = 1;
          ctx.strokeRect(ix - 1.5, iy - 1.5, (it.w || 1) * TILE + 3, (it.h || 1) * TILE + 3);
          ctx.globalAlpha = 1;
        }
      }

      drawHero(ctx, g.player.x - g.camX, g.player.y - g.camY, g.player.dir, g.player.frame, g.player.moving);
    }

    let raf;
    let last = performance.now();
    function frame(nowTs) {
      const dt = Math.min(0.05, (nowTs - last) / 1000);
      last = nowTs;
      update(dt);
      render();
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    const keymap = {
      ArrowUp: 'up', KeyW: 'up',
      ArrowDown: 'down', KeyS: 'down',
      ArrowLeft: 'left', KeyA: 'left',
      ArrowRight: 'right', KeyD: 'right',
      Space: 'interact', Enter: 'interact', KeyE: 'interact', KeyZ: 'interact',
    };
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeOverlay();
        return;
      }
      const k = keymap[e.code];
      if (k) {
        inputRef.current[k] = true;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      }
    };
    const onKeyUp = (e) => {
      const k = keymap[e.code];
      if (k) inputRef.current[k] = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      g.timers.forEach(clearTimeout);
      g.timers = [];
    };
  }, [closeOverlay]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        width={VIEW_W}
        height={VIEW_H}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated', objectFit: 'fill', display: 'block' }}
      />
      {showHint && !overlay && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap rounded-full border border-neon/70 bg-black/70 px-4 py-2 text-neon font-pixelify text-sm sm:text-base"
          // On touch the d-pad owns the bottom of the screen, so float the hint
          // up top there; on desktop it sits just above the floor.
          style={isTouch ? { top: '0.75rem' } : { bottom: '1rem' }}
        >
          {isTouch ? 'Tap Ⓐ to interact' : 'Press SPACE to interact'}
        </div>
      )}
      <InteractionOverlay data={overlay} onClose={closeOverlay} enableEffects={enableEffects} />
      <RoomTransition active={!!transition} enableEffects={enableEffects} />
      <DPad inputRef={inputRef} />
    </div>
  );
}
