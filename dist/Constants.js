var GAME_WIDTH = 600;
var GAME_HEIGHT = 500;
var PLAYER_SIZE = 32;
var PLAYER_SPEED = 5;
var TILESIZE = 32;
var LEVEL_1 = generateMap(60, 60);
var WORLD_WIDTH = LEVEL_1[0].length * TILESIZE;
var WORLD_HEIGHT = LEVEL_1.length * TILESIZE;
/// TILES AND SPRITES ///
var GRASS_BLOCK = document.getElementById('grass_block');
var SAND_BLOCK = document.getElementById('sand_block');
var STONE_BLOCK = document.getElementById('stone_block');
var DIRT_BLOCK = document.getElementById('dirt_block');
var WATER_BLOCK = document.getElementById('water_block');
var CANGURU_SPRITE = document.getElementById('canguru_sprite');
//# sourceMappingURL=Constants.js.map