const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;
const TILESIZE = 32;
const LEVEL_1 = generateMap(60, 60);
const WORLD_WIDTH = LEVEL_1[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL_1.length * TILESIZE;
// Player information
const PLAYER_SIZE = 32;
const PLAYER_SPEED = 5;
const PLAYER_INITIAL_POSITION_X = WORLD_WIDTH / 2;
const PLAYER_INITIAL_POSITION_Y = WORLD_HEIGHT / 2;
/// TILES AND SPRITES ///
const GRASS_BLOCK = document.getElementById('grass_block');
const SAND_BLOCK = document.getElementById('sand_block');
const STONE_BLOCK = document.getElementById('stone_block');
const DIRT_BLOCK = document.getElementById('dirt_block');
const WATER_BLOCK = document.getElementById('water_block');
const CANGURU_SPRITE = document.getElementById('canguru_sprite');
//# sourceMappingURL=Constants.js.map