const DEBUG = false;

const RENDER_DISTANCE = 6;

const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;


const TILESIZE = 48;

const LEVEL: number[][] = generateMap(60, 60);


const WORLD_WIDTH = LEVEL[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL.length * TILESIZE;

// Player information
const PLAYER_SIZE = 38;
const PLAYER_SPEED = 0.4;

const PLAYER_INITIAL_POSITION_X = WORLD_WIDTH / 2;
const PLAYER_INITIAL_POSITION_Y = WORLD_HEIGHT / 2;

// MISC
const YES_NO = 2;


/// TILES AND SPRITES ///

const GRASS_BLOCK = document.getElementById('grass_block') as HTMLImageElement;
const SAND_BLOCK = document.getElementById('sand_block') as HTMLImageElement;
const STONE_BLOCK = document.getElementById('stone_block') as HTMLImageElement;
const DIRT_BLOCK = document.getElementById('dirt_block') as HTMLImageElement;
const WATER_BLOCK = document.getElementById('water_block') as HTMLImageElement;
const TREE_BLOCK = document.getElementById('tree_block') as HTMLImageElement;

const CANGURU_SPRITE = document.getElementById('canguru_sprite') as HTMLImageElement;


// Layers

const GROUND_LAYER: number = 0;
const OBSTACLES_LAYER: number = 1;
