// ---------------------------------------------------------------------------
// Room definitions for the gallery. Each room is a tile grid with walls,
// doors (which swap rooms), decor (scenery), and interactables (your work).
//
// Coordinates are in TILES unless noted. The player anchor is bottom-centre.
// To add a room: add an entry here, point a door at it, give it an exit door
// back to 'hub'. To add a project: drop an interactable into a room.
// ---------------------------------------------------------------------------

import { TILE, DIR } from './constants.js';

// Thumbnails (shown in the interaction overlay).
import lizard from '../assets/lizard.gif';
import stepcity from '../assets/stepcity.png';
import trend from '../assets/trend.png';
import news from '../assets/news.png';
import video from '../assets/video.png';
import quill from '../assets/quill.png';
import poetryPdf from '../assets/CreatorsParadise.pdf';

// Accent colours (match the site palette).
const GREEN = '#43b95f';
const NEON = '#2DE2E6';
const BLUE = '#0496FF';
const PINK = '#FF00FF';
const WHITE = '#e9e6f0';
const PURPLE = '#6a63a8';

export const ROOMS = {
  // =========================================================================
  // HUB — an abstract atrium. Doors lead to each project room + a secret.
  // =========================================================================
  hub: {
    id: 'hub',
    name: 'THE ATRIUM',
    cols: 20,
    rows: 12,
    theme: {
      floor: '#211a3e',
      floorAlt: '#1b1533',
      floorLine: '#2c2456',
      wall: '#171232',
      wallTrim: NEON,
    },
    spawn: { x: 9, y: 9 },
    entrySpawn: { x: 9, y: 9 },
    walls: [],
    doors: [
      { x: 2, y: 0, w: 2, h: 1, to: 'jungle', accent: GREEN, label: 'LIZARD' },
      { x: 7, y: 0, w: 2, h: 1, to: 'city', accent: BLUE, label: 'STEP CITY' },
      { x: 12, y: 0, w: 2, h: 1, to: 'newsroom', accent: PINK, label: 'NEWS' },
      { x: 16, y: 0, w: 2, h: 1, to: 'gallery', accent: WHITE, label: 'POETRY' },
      // secret door, camouflaged against the wall (no label)
      { x: 18, y: 11, w: 1, h: 1, to: 'hidden', accent: '#171232', secret: true },
    ],
    decor: [
      { type: 'statue', x: 9, y: 4, w: 1, h: 2, solid: true },
      { type: 'rug', x: 7, y: 7, w: 6, h: 3 },
      { type: 'lamp', x: 2, y: 8, solid: true },
      { type: 'lamp', x: 17, y: 8, solid: true },
      { type: 'plant', x: 1, y: 1 },
      { type: 'plant', x: 18, y: 1 },
    ],
    interactables: [],
  },

  // =========================================================================
  // JUNGLE — Lizard's Legacy
  // =========================================================================
  jungle: {
    id: 'jungle',
    name: "LIZARD'S LEGACY",
    cols: 15,
    rows: 11,
    theme: {
      floor: '#1d3a24',
      floorAlt: '#234628',
      wall: '#142619',
      wallTrim: GREEN,
    },
    entrySpawn: { x: 6, y: 8 },
    walls: [],
    doors: [{ x: 6, y: 10, w: 2, h: 1, to: 'hub', accent: GREEN, label: '← HUB' }],
    decor: [
      { type: 'tree', x: 1, y: 1, solid: true },
      { type: 'tree', x: 12, y: 1, solid: true },
      { type: 'tree', x: 2, y: 7, solid: true },
      { type: 'tree', x: 11, y: 7, solid: true },
      { type: 'bush', x: 4, y: 8 },
      { type: 'bush', x: 9, y: 8 },
      { type: 'fern', x: 3, y: 4 },
      { type: 'fern', x: 11, y: 4 },
    ],
    interactables: [
      {
        id: 'lizard',
        x: 6, y: 2, w: 3, h: 2,
        art: 'shrine',
        title: "Lizard's Legacy",
        blurb: 'A tiny lizard vs. a colossal dragon. Each life, a little further.',
        thumb: lizard,
        href: 'https://stolenquotient2.itch.io/lizard-legacy',
        playLabel: 'PLAY ▶',
      },
    ],
  },

  // =========================================================================
  // CITY — Step City
  // =========================================================================
  city: {
    id: 'city',
    name: 'STEP CITY',
    cols: 15,
    rows: 11,
    theme: {
      floor: '#2b2b3a',
      floorAlt: '#30303f',
      floorLine: '#43435d',
      wall: '#1b1b2a',
      wallTrim: BLUE,
    },
    entrySpawn: { x: 7, y: 8 },
    walls: [],
    doors: [{ x: 6, y: 10, w: 2, h: 1, to: 'hub', accent: BLUE, label: '← HUB' }],
    decor: [
      { type: 'building', x: 1, y: 1, w: 3, h: 3, solid: true, color: '#3b3a63', roof: '#0496FF' },
      { type: 'building', x: 11, y: 1, w: 3, h: 3, solid: true, color: '#33324f', roof: '#2DE2E6' },
      { type: 'lamp', x: 2, y: 7, solid: true },
      { type: 'lamp', x: 12, y: 7, solid: true },
      { type: 'plant', x: 4, y: 8 },
      { type: 'plant', x: 9, y: 8 },
    ],
    interactables: [
      {
        id: 'stepcity',
        x: 6, y: 3, w: 2, h: 2,
        art: 'blueprint',
        title: 'Step City',
        blurb: 'Turn your real-world steps into a city you build.',
        thumb: stepcity,
        href: 'https://www.figma.com/proto/p9Gn8oWKZ0nu94IfIhQDzE/Step-City',
        playLabel: 'VIEW ▶',
      },
    ],
  },

  // =========================================================================
  // NEWSROOM — The Daily Trend + News Reporting + Video Journalism
  // =========================================================================
  newsroom: {
    id: 'newsroom',
    name: 'THE NEWSROOM',
    cols: 17,
    rows: 11,
    theme: {
      floor: '#26222e',
      floorAlt: '#2c2735',
      wall: '#19151f',
      wallTrim: PINK,
    },
    entrySpawn: { x: 8, y: 8 },
    walls: [],
    doors: [{ x: 7, y: 10, w: 2, h: 1, to: 'hub', accent: PINK, label: '← HUB' }],
    decor: [
      { type: 'desk', x: 2, y: 6, w: 3, solid: true },
      { type: 'desk', x: 12, y: 6, w: 3, solid: true },
      { type: 'plant', x: 1, y: 1 },
      { type: 'plant', x: 15, y: 1 },
    ],
    interactables: [
      {
        id: 'dailytrend',
        x: 3, y: 2, w: 2, h: 2,
        art: 'terminal',
        title: 'The Daily Trend',
        blurb: "Guess the day's trending topic. News as a daily game.",
        thumb: trend,
        href: 'https://news-connections.lovable.app/',
        playLabel: 'PLAY ▶',
      },
      {
        id: 'news',
        x: 8, y: 2, w: 1, h: 2,
        art: 'mic',
        title: 'News Reporting',
        blurb: 'Bylines for The Daily Northwestern.',
        thumb: news,
        href: 'https://dailynorthwestern.com/staff_name/jerry-zhou/',
        playLabel: 'READ ▶',
      },
      {
        id: 'video',
        x: 12, y: 2, w: 2, h: 2,
        art: 'monitor',
        title: 'Video Journalism',
        blurb: 'Video reporting for The Daily Northwestern.',
        thumb: video,
        href: 'https://www.youtube.com/playlist?list=PL_WrJLUaaNBcwWu6RRHy18aKSnK0z3Cwo',
        playLabel: 'WATCH ▶',
      },
    ],
  },

  // =========================================================================
  // GALLERY — Creators Paradise (poetry). A bright modern-art aisle.
  // =========================================================================
  gallery: {
    id: 'gallery',
    name: 'CREATORS PARADISE',
    cols: 15,
    rows: 11,
    theme: {
      floor: '#e9e6f0',
      floorAlt: '#e1ddec',
      floorLine: '#d6d1e2',
      wall: '#cfc9da',
      wallTrim: '#2E2157',
    },
    entrySpawn: { x: 7, y: 8 },
    walls: [],
    doors: [{ x: 6, y: 10, w: 2, h: 1, to: 'hub', accent: '#2E2157', label: '← HUB' }],
    decor: [
      { type: 'painting', x: 2, y: 1, w: 1, h: 1, color: '#2E2157', color2: '#FF00FF', color3: '#2DE2E6' },
      { type: 'painting', x: 6, y: 1, w: 1, h: 1, color: '#0496FF', color2: '#2DE2E6', color3: '#FFFFFF' },
      { type: 'painting', x: 11, y: 1, w: 1, h: 1, color: '#FF00FF', color2: '#2E2157', color3: '#2DE2E6' },
      { type: 'plant', x: 1, y: 8 },
      { type: 'plant', x: 13, y: 8 },
    ],
    interactables: [
      {
        id: 'poetry',
        x: 6, y: 4, w: 2, h: 2,
        art: 'pedestal',
        title: 'Creators Paradise',
        blurb: 'A poetry collection.',
        thumb: quill,
        href: poetryPdf,
        playLabel: 'READ ▶',
      },
    ],
  },

  // =========================================================================
  // HIDDEN — a secret room. Easter-egg space for personal bits.
  // =========================================================================
  hidden: {
    id: 'hidden',
    name: '???',
    cols: 11,
    rows: 9,
    theme: {
      floor: '#100e1c',
      floorAlt: '#15111f',
      wall: '#080610',
      wallTrim: PINK,
    },
    entrySpawn: { x: 5, y: 6 },
    walls: [],
    doors: [{ x: 4, y: 8, w: 2, h: 1, to: 'hub', accent: PINK, label: '← HUB' }],
    decor: [
      { type: 'crate', x: 1, y: 1, solid: true },
      { type: 'crate', x: 8, y: 6, solid: true },
      { type: 'lamp', x: 1, y: 6, solid: true },
    ],
    interactables: [
      {
        id: 'about',
        x: 5, y: 2, w: 1, h: 2,
        art: 'statue',
        title: 'you found me',
        blurb: 'hi, i’m Jerry. i like making cool things for people.',
        thumb: quill,
        href: 'https://www.linkedin.com/in/jerryjiaruizhou/',
        playLabel: 'SAY HI ▶',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Collision grid + helpers (cached per room).
// ---------------------------------------------------------------------------
function fillRect(grid, rect, value = true) {
  const cols = grid[0].length;
  const rows = grid.length;
  for (let y = rect.y; y < rect.y + (rect.h || 1); y++) {
    for (let x = rect.x; x < rect.x + (rect.w || 1); x++) {
      if (x >= 0 && y >= 0 && x < cols && y < rows) grid[y][x] = value;
    }
  }
}

export function getSolids(room) {
  if (room._solids) return room._solids;
  const grid = Array.from({ length: room.rows }, () => new Array(room.cols).fill(false));
  // border ring
  for (let x = 0; x < room.cols; x++) {
    grid[0][x] = true;
    grid[room.rows - 1][x] = true;
  }
  for (let y = 0; y < room.rows; y++) {
    grid[y][0] = true;
    grid[y][room.cols - 1] = true;
  }
  for (const w of room.walls || []) fillRect(grid, w);
  for (const d of room.decor || []) if (d.solid) fillRect(grid, { x: d.x, y: d.y, w: d.w || 1, h: d.h || 1 });
  for (const it of room.interactables || []) fillRect(grid, { x: it.x, y: it.y, w: it.w || 1, h: it.h || 1 });
  // carve door openings (passable)
  for (const dr of room.doors || []) fillRect(grid, dr, false);
  room._solids = grid;
  return grid;
}

function tileSolid(room, tx, ty) {
  if (tx < 0 || ty < 0 || tx >= room.cols || ty >= room.rows) return true;
  return getSolids(room)[ty][tx];
}

// Does an axis-aligned box (pixels) hit any solid tile?
export function boxHitsSolid(room, px, py, w, h) {
  const x0 = Math.floor(px / TILE);
  const x1 = Math.floor((px + w - 1) / TILE);
  const y0 = Math.floor(py / TILE);
  const y1 = Math.floor((py + h - 1) / TILE);
  for (let ty = y0; ty <= y1; ty++) {
    for (let tx = x0; tx <= x1; tx++) {
      if (tileSolid(room, tx, ty)) return true;
    }
  }
  return false;
}

// Convert a {x,y} tile spawn to a pixel bottom-centre anchor.
export function spawnToPixels(spawn) {
  return { x: (spawn.x + 0.5) * TILE, y: (spawn.y + 1) * TILE };
}

// Where to drop the player when they ENTER `room` having come from `fromId`.
// Finds the door in this room that leads back to where we came from and spawns
// the player just inside it, facing into the room — so re-entering a room puts
// you at the doorway you used, not at the room's default centre. Returns a
// pixel bottom-centre anchor plus a facing dir, or null if there's no such door.
export function doorEntry(room, fromId) {
  const d = (room.doors || []).find((dr) => dr.to === fromId);
  if (!d) return null;
  const w = d.w || 1;
  const h = d.h || 1;
  let x = (d.x + w / 2) * TILE; // centred on the door horizontally
  let y;
  let dir;
  if (d.y <= 0) {
    // top-edge door → step down into the room
    y = (d.y + h + 1) * TILE;
    dir = DIR.DOWN;
  } else if (d.y + h >= room.rows - 1) {
    // bottom-edge door → step up into the room
    y = (d.y - 0.2) * TILE;
    dir = DIR.UP;
  } else if (d.x <= 0) {
    // left-edge door → step right into the room
    x = (d.x + w + 0.5) * TILE;
    y = (d.y + h) * TILE;
    dir = DIR.RIGHT;
  } else if (d.x + w >= room.cols - 1) {
    // right-edge door → step left into the room
    x = (d.x - 0.5) * TILE;
    y = (d.y + h) * TILE;
    dir = DIR.LEFT;
  } else {
    y = (d.y + h + 1) * TILE;
    dir = DIR.DOWN;
  }
  return { x, y, dir };
}

// Centre (pixels) of an interactable's footprint.
export function interactableCenter(it) {
  return { x: (it.x + (it.w || 1) / 2) * TILE, y: (it.y + (it.h || 1) / 2) * TILE };
}
