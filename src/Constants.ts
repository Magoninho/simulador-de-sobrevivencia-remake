const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;


const TILESIZE = 32;

const LEVEL_1: number[][] = generateMap(60, 60);


const WORLD_WIDTH = LEVEL_1[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL_1.length * TILESIZE;

// Player information
const PLAYER_SIZE = 32;
const PLAYER_SPEED = 0.4;

const PLAYER_INITIAL_POSITION_X = WORLD_WIDTH/2;
const PLAYER_INITIAL_POSITION_Y = WORLD_HEIGHT/2;

// MISC
const YES_NO = 2;


/// TILES AND SPRITES ///

const GRASS_BLOCK = document.getElementById('grass_block') as HTMLImageElement;
const SAND_BLOCK = document.getElementById('sand_block') as HTMLImageElement;
const STONE_BLOCK = document.getElementById('stone_block') as HTMLImageElement;
const DIRT_BLOCK = document.getElementById('dirt_block') as HTMLImageElement;
const WATER_BLOCK = document.getElementById('water_block') as HTMLImageElement;

const CANGURU_SPRITE = document.getElementById('canguru_sprite') as HTMLImageElement;

