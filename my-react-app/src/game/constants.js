// ---------------------------------------------------------------------------
// Core engine constants for the top-down RPG gallery.
// Everything is authored at a small "internal resolution" and then scaled up
// with nearest-neighbour (image-rendering: pixelated) so it stays crisp/retro.
// ---------------------------------------------------------------------------

export const TILE = 16; // logical size of one tile, in internal pixels

// Internal render resolution (16:9). The canvas backing store is this size;
// CSS scales it up to fill the screen with pixelated rendering.
export const VIEW_W = 320;
export const VIEW_H = 180;

// Player movement / animation
export const PLAYER_SPEED = 72; // internal px per second
export const ANIM_FPS = 8; // walk-cycle frames per second

// Player collision box (a small rectangle at the feet) relative to the
// player anchor, which is the bottom-centre of the sprite.
export const PLAYER_BOX_W = 10;
export const PLAYER_BOX_H = 6;

// Visual size of the hero sprite (drawn procedurally).
export const HERO_W = 14;
export const HERO_H = 20;

// How close (in internal px, centre-to-centre) the player must be to an
// interactable to trigger its prompt.
export const INTERACT_RANGE = 22;

// Timing for the CRT room-swap transition (ms).
export const TRANSITION_OUT_MS = 240; // cover the screen
export const TRANSITION_IN_MS = 240; // reveal the new room

// Direction constants
export const DIR = {
  DOWN: 'down',
  UP: 'up',
  LEFT: 'left',
  RIGHT: 'right',
};
