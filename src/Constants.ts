const GAME_WIDTH = 611;
const GAME_HEIGHT = 511;

const PLAYER_SIZE = 32;
const PLAYER_SPEED = 5;

const TILESIZE = 32;

const LEVEL_1: number[][] = generateMap(50, 50);


const WORLD_WIDTH = LEVEL_1[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL_1.length * TILESIZE;

/// TILES AND SPRITES ///

const GRASS_BLOCK = document.getElementById('grass_block') as HTMLImageElement;
const SAND_BLOCK = document.getElementById('sand_block') as HTMLImageElement;
