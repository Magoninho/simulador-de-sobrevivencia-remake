const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;

const PLAYER_SIZE = 32;
const PLAYER_SPEED = 5;

const TILESIZE = 32;

const LEVEL_1: number[][] = generateMap(60, 60);


const WORLD_WIDTH = LEVEL_1[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL_1.length * TILESIZE;

/// TILES AND SPRITES ///

const GRASS_BLOCK = document.getElementById('grass_block') as HTMLImageElement;
const SAND_BLOCK = document.getElementById('sand_block') as HTMLImageElement;
const STONE_BLOCK = document.getElementById('stone_block') as HTMLImageElement;
const DIRT_BLOCK = document.getElementById('dirt_block') as HTMLImageElement;
const WATER_BLOCK = document.getElementById('water_block') as HTMLImageElement;
