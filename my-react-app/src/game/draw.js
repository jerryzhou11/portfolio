// ---------------------------------------------------------------------------
// All procedural pixel-art rendering lives here. No image assets: every sprite
// is drawn with little rectangles, then the whole low-res canvas is scaled up
// with nearest-neighbour so it reads as crisp pixel art.
// ---------------------------------------------------------------------------

import { TILE, HERO_W, HERO_H, DIR } from './constants.js';

// Tiny rectangle helper (rounds to integer pixels, skips empty colours).
function r(ctx, x, y, w, h, c) {
  if (!c || w <= 0 || h <= 0) return;
  ctx.fillStyle = c;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

// ---------------------------------------------------------------------------
// HERO  — a pixel self-portrait. Tweak this palette to match yourself.
// (glasses + teal jacket + purple pants, styled to the site palette)
// ---------------------------------------------------------------------------
export const HERO = {
  hair: '#241a10',
  hairHi: '#3a2a1a',
  skin: '#f0c19a',
  skinSh: '#d2966c',
  jacket: '#2DE2E6',
  jacketSh: '#179a9e',
  shirt: '#141226',
  pants: '#2E2157',
  shoes: '#0c0b14',
  eye: '#0c0b14',
  glass: '#0c0b14',
};

// Draw the hero. (cx, by) = bottom-centre anchor, in canvas/screen pixels.
export function drawHero(ctx, cx, by, dir, frame, moving) {
  const isLeft = dir === DIR.LEFT;
  const side = dir === DIR.LEFT || dir === DIR.RIGHT;

  ctx.save();
  if (isLeft) {
    // Draw the RIGHT-facing pose mirrored.
    ctx.translate(Math.round(cx), 0);
    ctx.scale(-1, 1);
    cx = 0;
  }

  const tx = Math.round(cx - HERO_W / 2);
  const ty = Math.round(by - HERO_H);
  const step = moving ? frame % 2 : 0;

  // contact shadow
  ctx.fillStyle = 'rgba(0,0,0,0.30)';
  ctx.beginPath();
  ctx.ellipse(Math.round(isLeft ? 0 : cx), Math.round(by) - 1, 6, 2.2, 0, 0, Math.PI * 2);
  ctx.fill();

  // --- legs ---
  if (side) {
    const front = step === 0 ? 0 : 2;
    r(ctx, tx + 7, ty + 16, 3, 3, HERO.pants); // back leg
    r(ctx, tx + 7, ty + 19, 3, 1, HERO.shoes);
    r(ctx, tx + 4 + front, ty + 16, 3, 3, HERO.pants); // front leg
    r(ctx, tx + 4 + front, ty + 19, 3, 1, HERO.shoes);
  } else {
    const lo = step === 0 ? 0 : 1;
    const ro = step === 0 ? 1 : 0;
    r(ctx, tx + 4, ty + 16 + lo, 3, 3 - lo, HERO.pants);
    r(ctx, tx + 4, ty + 19, 3, 1, HERO.shoes);
    r(ctx, tx + 7, ty + 16 + ro, 3, 3 - ro, HERO.pants);
    r(ctx, tx + 7, ty + 19, 3, 1, HERO.shoes);
  }

  // --- torso / jacket ---
  if (side) {
    r(ctx, tx + 4, ty + 9, 6, 7, HERO.jacket);
    r(ctx, tx + 4, ty + 9, 1, 7, HERO.jacketSh);
    const arm = step === 0 ? 9 : 10;
    r(ctx, tx + arm, ty + 10, 2, 5, HERO.jacketSh); // swinging arm
  } else {
    r(ctx, tx + 3, ty + 9, 8, 7, HERO.jacket);
    r(ctx, tx + 3, ty + 9, 1, 7, HERO.jacketSh);
    r(ctx, tx + 10, ty + 9, 1, 7, HERO.jacketSh);
    r(ctx, tx + 6, ty + 10, 2, 6, HERO.shirt); // zipper
    r(ctx, tx + 2, ty + 10, 2, 5, HERO.jacket); // arms
    r(ctx, tx + 10, ty + 10, 2, 5, HERO.jacket);
    r(ctx, tx + 2, ty + 15, 2, 1, HERO.skin); // hands
    r(ctx, tx + 10, ty + 15, 2, 1, HERO.skin);
  }

  // --- head ---
  if (side) {
    r(ctx, tx + 4, ty + 2, 7, 7, HERO.skin);
    r(ctx, tx + 4, ty + 1, 7, 2, HERO.hair);
    r(ctx, tx + 4, ty + 2, 2, 5, HERO.hair); // hair back
    r(ctx, tx + 8, ty + 5, 3, 1, HERO.glass); // glasses bar
    r(ctx, tx + 9, ty + 5, 1, 2, HERO.eye);
  } else if (dir === DIR.UP) {
    r(ctx, tx + 3, ty + 2, 8, 7, HERO.skin);
    r(ctx, tx + 2, ty + 1, 10, 5, HERO.hair);
    r(ctx, tx + 3, ty + 6, 8, 1, HERO.hairHi);
  } else {
    r(ctx, tx + 3, ty + 2, 8, 7, HERO.skin);
    r(ctx, tx + 2, ty + 1, 10, 3, HERO.hair); // cap
    r(ctx, tx + 2, ty + 1, 2, 5, HERO.hair); // fringe L
    r(ctx, tx + 10, ty + 1, 2, 5, HERO.hair); // fringe R
    r(ctx, tx + 4, ty + 5, 2, 2, HERO.glass); // glasses
    r(ctx, tx + 8, ty + 5, 2, 2, HERO.glass);
    r(ctx, tx + 6, ty + 5, 2, 1, HERO.glass); // bridge
    r(ctx, tx + 4, ty + 5, 1, 1, HERO.eye);
    r(ctx, tx + 8, ty + 5, 1, 1, HERO.eye);
    r(ctx, tx + 5, ty + 8, 4, 1, HERO.skinSh); // mouth/chin
  }

  ctx.restore();
}

// ---------------------------------------------------------------------------
// FLOOR + WALLS
// ---------------------------------------------------------------------------
function drawFloor(ctx, room) {
  const W = room.cols * TILE;
  const H = room.rows * TILE;
  const t = room.theme || {};
  const base = t.floor || '#211a3e';
  const alt = t.floorAlt || base;
  r(ctx, 0, 0, W, H, base);
  // checkerboard / grid accent
  for (let gy = 0; gy < room.rows; gy++) {
    for (let gx = 0; gx < room.cols; gx++) {
      if ((gx + gy) % 2 === 0) r(ctx, gx * TILE, gy * TILE, TILE, TILE, alt);
    }
  }
  if (t.floorLine) {
    ctx.globalAlpha = 0.5;
    for (let gx = 1; gx < room.cols; gx++) r(ctx, gx * TILE, 0, 1, H, t.floorLine);
    for (let gy = 1; gy < room.rows; gy++) r(ctx, 0, gy * TILE, W, 1, t.floorLine);
    ctx.globalAlpha = 1;
  }
}

function drawWalls(ctx, room) {
  const W = room.cols * TILE;
  const H = room.rows * TILE;
  const t = room.theme || {};
  const wall = t.wall || '#171232';
  const trim = t.wallTrim || '#2DE2E6';
  // border ring (1 tile thick)
  r(ctx, 0, 0, W, TILE, wall); // top
  r(ctx, 0, H - TILE, W, TILE, wall); // bottom
  r(ctx, 0, 0, TILE, H, wall); // left
  r(ctx, W - TILE, 0, TILE, H, wall); // right
  // trim line just inside the walls
  r(ctx, 0, TILE - 2, W, 2, trim);
  r(ctx, 0, H - TILE, W, 2, trim);
  r(ctx, TILE - 2, 0, 2, H, trim);
  r(ctx, W - TILE, 0, 2, H, trim);
  // interior walls — dark body + a glowing trim edge so the maze reads clearly
  // against the floor (a flat dark block would just disappear into it).
  for (const wseg of room.walls || []) {
    const wx = wseg.x * TILE;
    const wy = wseg.y * TILE;
    const ww = wseg.w * TILE;
    const wh = wseg.h * TILE;
    r(ctx, wx, wy, ww, wh, wall); // dark body
    ctx.globalAlpha = 0.14; // faint wash lifts the block off the floor
    r(ctx, wx, wy, ww, wh, trim);
    ctx.globalAlpha = 1;
    r(ctx, wx, wy, ww, 2, trim); // lit top edge
    r(ctx, wx, wy, 2, wh, trim); // lit left edge
  }
}

// Small centred pixel-ish label with a dark backing for readability.
export function drawLabel(ctx, text, cx, cy, color) {
  ctx.font = '7px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const w = Math.ceil(ctx.measureText(text).width);
  r(ctx, Math.round(cx - w / 2) - 2, Math.round(cy) - 5, w + 4, 10, 'rgba(8,7,17,0.82)');
  ctx.fillStyle = color;
  ctx.fillText(text, Math.round(cx), Math.round(cy) + 0.5);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
}

function drawDoor(ctx, door, room) {
  const x = door.x * TILE;
  const y = door.y * TILE;
  const w = door.w * TILE;
  const h = door.h * TILE;
  const accent = door.accent || '#2DE2E6';
  r(ctx, x, y, w, h, '#070611'); // dark opening
  r(ctx, x, y, w, 1, accent); // frame
  r(ctx, x, y, 1, h, accent);
  r(ctx, x + w - 1, y, 1, h, accent);
  // soft inner glow
  ctx.globalAlpha = 0.18;
  r(ctx, x + 1, y + 1, w - 2, h - 1, accent);
  ctx.globalAlpha = 1;
  if (door.label) {
    // Tuck the label just inside the room from whichever edge the door is on,
    // so doors spread across all four walls still read clearly.
    const cols = room ? room.cols : 0;
    const rows = room ? room.rows : 0;
    let lx = x + w / 2;
    let ly = y - 6;
    if (door.y === 0) ly = y + h + 6; // top edge → below
    else if (rows && door.y + door.h >= rows - 1) ly = y - 6; // bottom edge → above
    else if (door.x === 0) { lx = x + w + 12; ly = y + h / 2; } // left edge → right
    else if (cols && door.x + door.w >= cols - 1) { lx = x - 12; ly = y + h / 2; } // right edge → left
    drawLabel(ctx, door.label, lx, ly, accent);
  }
}

// ---------------------------------------------------------------------------
// DECOR — keyed by type. (px, py) = top-left in canvas pixels.
// Used for static scenery AND for interactable "art".
// ---------------------------------------------------------------------------
const DECOR = {
  tree(ctx, x, y) {
    r(ctx, x + 6, y + 14, 4, 10, '#3a2a16'); // trunk
    r(ctx, x + 1, y + 1, 14, 12, '#1f6d34'); // canopy
    r(ctx, x + 3, y - 2, 10, 8, '#2a8f45');
    r(ctx, x + 5, y + 2, 5, 4, '#43b95f'); // highlight
  },
  bush(ctx, x, y) {
    r(ctx, x, y + 4, 16, 8, '#1f6d34');
    r(ctx, x + 2, y + 1, 12, 6, '#2a8f45');
    r(ctx, x + 5, y + 2, 4, 2, '#43b95f');
  },
  fern(ctx, x, y) {
    r(ctx, x + 6, y + 6, 2, 8, '#2a8f45');
    r(ctx, x + 2, y + 7, 12, 2, '#37a352');
    r(ctx, x + 4, y + 4, 8, 2, '#37a352');
    r(ctx, x + 5, y + 10, 6, 2, '#1f6d34');
  },
  building(ctx, x, y, o = {}) {
    const bw = (o.w || 3) * TILE;
    const bh = (o.h || 3) * TILE;
    r(ctx, x, y, bw, bh, o.color || '#3b3a63');
    r(ctx, x, y, bw, 3, o.roof || '#565594');
    for (let wy = y + 6; wy < y + bh - 4; wy += 7) {
      for (let wx = x + 3; wx < x + bw - 4; wx += 6) {
        r(ctx, wx, wy, 3, 4, Math.random() > 0.4 ? '#2DE2E6' : '#16324a');
      }
    }
  },
  statue(ctx, x, y) {
    r(ctx, x + 2, y + 18, 12, 4, '#2a2350'); // base
    r(ctx, x + 4, y + 6, 8, 13, '#6a63a8'); // body
    r(ctx, x + 5, y + 0, 6, 7, '#8079c0'); // head
    r(ctx, x + 6, y + 2, 4, 3, '#2DE2E6'); // glow face
  },
  rug(ctx, x, y, o = {}) {
    const w = (o.w || 4) * TILE;
    const h = (o.h || 3) * TILE;
    r(ctx, x, y, w, h, o.color || '#3a2d6b');
    r(ctx, x + 2, y + 2, w - 4, h - 4, o.inner || '#4b3b8a');
    r(ctx, x + 5, y + 5, w - 10, h - 10, o.color || '#3a2d6b');
  },
  lamp(ctx, x, y) {
    r(ctx, x + 6, y + 6, 3, 16, '#2a2350');
    r(ctx, x + 4, y + 1, 7, 6, '#2DE2E6');
    ctx.globalAlpha = 0.25;
    r(ctx, x + 1, y - 2, 13, 12, '#2DE2E6');
    ctx.globalAlpha = 1;
  },
  plant(ctx, x, y) {
    r(ctx, x + 4, y + 12, 8, 8, '#b06a36'); // pot
    r(ctx, x + 5, y + 2, 2, 11, '#2a8f45');
    r(ctx, x + 9, y + 4, 2, 9, '#2a8f45');
    r(ctx, x + 7, y + 0, 2, 13, '#37a352');
  },
  desk(ctx, x, y, o = {}) {
    const w = (o.w || 3) * TILE;
    r(ctx, x, y + 8, w, 10, '#5a4632'); // desk top
    r(ctx, x, y + 8, w, 2, '#74573d');
    r(ctx, x + 2, y + 18, 3, 6, '#3a2c1f');
    r(ctx, x + w - 5, y + 18, 3, 6, '#3a2c1f');
  },
  monitor(ctx, x, y) {
    r(ctx, x + 3, y + 2, 12, 9, '#0c0b16');
    r(ctx, x + 4, y + 3, 10, 7, '#123a52');
    r(ctx, x + 5, y + 4, 8, 1, '#2DE2E6');
    r(ctx, x + 5, y + 6, 6, 1, '#2DE2E6');
    r(ctx, x + 7, y + 11, 4, 3, '#0c0b16'); // stand
  },
  // --- interactable arts ---
  shrine(ctx, x, y) {
    r(ctx, x, y + 14, 24, 10, '#5b5566'); // stone base
    r(ctx, x + 2, y + 6, 4, 10, '#6f6878'); // pillars
    r(ctx, x + 18, y + 6, 4, 10, '#6f6878');
    r(ctx, x, y + 2, 24, 5, '#6f6878'); // lintel
    // glowing spear
    r(ctx, x + 11, y + 2, 2, 18, '#d8d2e8');
    r(ctx, x + 9, y + 1, 6, 4, '#2DE2E6');
    ctx.globalAlpha = 0.3;
    r(ctx, x + 6, y, 12, 12, '#2DE2E6');
    ctx.globalAlpha = 1;
  },
  terminal(ctx, x, y) {
    r(ctx, x, y + 18, 24, 6, '#1a1830'); // desk
    r(ctx, x + 2, y + 2, 20, 16, '#0c0b16'); // monitor body
    r(ctx, x + 4, y + 4, 16, 11, '#102a3a'); // screen
    r(ctx, x + 5, y + 5, 5, 5, '#FF00FF'); // wordle cell
    r(ctx, x + 11, y + 5, 5, 5, '#2DE2E6');
    r(ctx, x + 5, y + 11, 11, 2, '#2DE2E6');
    ctx.globalAlpha = 0.25;
    r(ctx, x + 2, y, 20, 18, '#2DE2E6');
    ctx.globalAlpha = 1;
  },
  mic(ctx, x, y) {
    r(ctx, x + 9, y + 10, 2, 12, '#2a2350'); // stand
    r(ctx, x + 4, y + 18, 12, 3, '#2a2350'); // base
    r(ctx, x + 6, y + 2, 8, 9, '#c0392b'); // mic head
    r(ctx, x + 7, y + 3, 6, 7, '#e0584b');
    r(ctx, x + 8, y + 0, 4, 3, '#1a1830');
  },
  blueprint(ctx, x, y) {
    r(ctx, x, y + 2, 24, 18, '#0e2b4d'); // board
    r(ctx, x + 1, y + 3, 22, 16, '#13447a');
    ctx.globalAlpha = 0.9;
    for (let i = 0; i < 5; i++) r(ctx, x + 3 + i * 4, y + 5, 1, 12, '#2DE2E6');
    for (let i = 0; i < 4; i++) r(ctx, x + 3, y + 6 + i * 3, 18, 1, '#2DE2E6');
    ctx.globalAlpha = 1;
    r(ctx, x + 8, y + 9, 6, 6, '#FF00FF'); // building footprint
  },
  pedestal(ctx, x, y) {
    r(ctx, x + 4, y + 12, 16, 12, '#e7e3ee'); // column
    r(ctx, x + 2, y + 20, 20, 4, '#cfc9da');
    r(ctx, x + 2, y + 10, 20, 3, '#cfc9da');
    // open book on top
    r(ctx, x + 5, y + 5, 14, 6, '#1a1830');
    r(ctx, x + 6, y + 4, 6, 6, '#f4f1fa');
    r(ctx, x + 12, y + 4, 6, 6, '#f4f1fa');
    r(ctx, x + 7, y + 6, 4, 1, '#9a93b5');
    r(ctx, x + 13, y + 6, 4, 1, '#9a93b5');
  },
  painting(ctx, x, y, o = {}) {
    const w = (o.w || 1) * TILE + 8;
    const h = (o.h || 1) * TILE + 8;
    r(ctx, x, y, w, h, '#d9d4e2'); // frame
    r(ctx, x + 2, y + 2, w - 4, h - 4, o.color || '#2E2157');
    r(ctx, x + 4, y + 4, w - 8, h - 8, o.color2 || '#FF00FF');
    r(ctx, x + 6, y + 6, (w - 12) / 2, h - 12, o.color3 || '#2DE2E6');
  },
  crate(ctx, x, y) {
    r(ctx, x + 2, y + 6, 12, 12, '#6b4f30');
    r(ctx, x + 2, y + 6, 12, 2, '#825f3a');
    r(ctx, x + 7, y + 6, 2, 12, '#3a2c1f');
  },
  sign(ctx, x, y) {
    r(ctx, x + 7, y + 11, 2, 11, '#3a2c1f'); // post
    r(ctx, x + 1, y + 1, 14, 11, '#2a2350'); // board frame
    r(ctx, x + 2, y + 2, 12, 9, '#3a3470'); // board inner
    r(ctx, x + 4, y + 4, 8, 1, '#2DE2E6'); // text lines
    r(ctx, x + 4, y + 6, 8, 1, '#2DE2E6');
    r(ctx, x + 4, y + 8, 5, 1, '#2DE2E6');
    ctx.globalAlpha = 0.25;
    r(ctx, x, y - 1, 16, 13, '#2DE2E6'); // soft glow
    ctx.globalAlpha = 1;
  },
};

export function drawDecor(ctx, type, px, py, opt) {
  const fn = DECOR[type] || DECOR.crate;
  fn(ctx, px, py, opt);
}

// ---------------------------------------------------------------------------
// Build the static background (floor + walls + decor + doors) once per room.
// ---------------------------------------------------------------------------
export function buildRoomBackground(room) {
  const c = document.createElement('canvas');
  c.width = room.cols * TILE;
  c.height = room.rows * TILE;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  drawFloor(ctx, room);
  drawWalls(ctx, room);
  for (const d of room.decor || []) {
    drawDecor(ctx, d.type, d.x * TILE, d.y * TILE, d);
  }
  for (const door of room.doors || []) {
    drawDoor(ctx, door, room);
  }
  return c;
}
