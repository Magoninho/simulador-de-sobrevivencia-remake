const DEBUG = true;
const RENDER_DISTANCE = 6;
const GAME_WIDTH = 600;
const GAME_HEIGHT = 500;
const TILESIZE = 48;
const LEVEL = generateMap(60, 60);
const WORLD_WIDTH = LEVEL[0].length * TILESIZE;
const WORLD_HEIGHT = LEVEL.length * TILESIZE;
// Player information
const PLAYER_SIZE = 38;
const PLAYER_SPEED = 0.4;
const PLAYER_INITIAL_POSITION_X = WORLD_WIDTH / 2;
const PLAYER_INITIAL_POSITION_Y = WORLD_HEIGHT / 2;
// MISC
const YES_NO = 2;
const CANGURU_SPRITE = document.getElementById('canguru_sprite');
// Layers
const GROUND_LAYER = 0;
const OBSTACLES_LAYER = 1;
//# sourceMappingURL=Constants.js.map