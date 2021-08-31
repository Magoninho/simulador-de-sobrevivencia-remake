// class InputHandler {
// 	constructor(game: Game) {
// 		document.addEventListener('keydown', event => {
// 			switch (event.key) {
// 				case 'w':
// 					game.player.dy = -1;
// 					game.player.isMoving = true;
// 					break;
// 				case 's':
// 					// move down
// 					game.player.dy = 1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'a':
// 					// move left
// 					game.player.dx = -1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'd':
// 					// move right
// 					game.player.dx = 1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'W':
// 					game.player.dy = -1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'S':
// 					// move down
// 					game.player.dy = 1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'A':
// 					// move left
// 					game.player.dx = -1;
// 					game.player.isMoving = true;
// 					break;
// 				case 'D':
// 					// move right
// 					game.player.dx = 1;
// 					game.player.isMoving = true;
// 					break;
// 			}
// 		});
// 		document.addEventListener('keyup', event => {
// 			switch (event.key) {
// 				case 'w':
// 					game.player.dy = 0;
// 					game.player.isMoving = false;
// 					break;
// 				case 's':
// 					game.player.dy = 0;
// 					game.player.isMoving = false;
// 					// move down
// 					break;
// 				case 'a':
// 					game.player.dx = 0;
// 					game.player.isMoving = false;
// 					// move left
// 					break;
// 				case 'd':
// 					game.player.dx = 0;
// 					game.player.isMoving = false;
// 					// move right
// 					break;
// 				case 'W':
// 					game.player.dy = 0;
// 					game.player.isMoving = false;
// 					break;
// 				case 'S':
// 					game.player.dy = 0;
// 					game.player.isMoving = false;
// 					// move down
// 					break;
// 				case 'A':
// 					game.player.dx = 0;
// 					game.player.isMoving = false;
// 					// move left
// 					break;
// 				case 'D':
// 					game.player.dx = 0;
// 					game.player.isMoving = false;
// 					// move right
// 					break;
// 			}
// 		});
// 	}
// }
// New input handler by @YohananDiamond thx :)
var InputHandler = /** @class */ (function () {
    function InputHandler(game) {
        var down_handlers = new Map();
        down_handlers['w'] = function () {
            game.player.dy = -1;
            game.player.isMoving = true;
        };
        down_handlers['s'] = function () {
            game.player.dy = 1;
            game.player.isMoving = true;
        };
        down_handlers['a'] = function () {
            game.player.dx = -1;
            game.player.isMoving = true;
        };
        down_handlers['d'] = function () {
            game.player.dx = 1;
            game.player.isMoving = true;
        };
        var up_handlers = new Map();
        up_handlers['w'] = function () {
            if (game.player.dy == -1) {
                game.player.dy = 0;
                if (game.player.dx == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['s'] = function () {
            if (game.player.dy == 1) {
                game.player.dy = 0;
                if (game.player.dx == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['a'] = function () {
            if (game.player.dx == -1) {
                game.player.dx = 0;
                if (game.player.dy == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['d'] = function () {
            if (game.player.dx == 1) {
                game.player.dx = 0;
                if (game.player.dy == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        document.addEventListener('keydown', function (event) {
            var handler = down_handlers[event.key.toLowerCase()];
            if (handler != undefined)
                handler();
        });
        document.addEventListener('keyup', function (event) {
            var handler = up_handlers[event.key.toLowerCase()];
            if (handler != undefined)
                handler();
        });
    }
    return InputHandler;
}());
//# sourceMappingURL=InputHandler.js.map