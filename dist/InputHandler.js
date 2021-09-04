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
class InputHandler {
    constructor(game) {
        const down_handlers = new Map();
        down_handlers['w'] = () => {
            game.player.dy = -1;
            game.player.isMoving = true;
        };
        down_handlers['s'] = () => {
            game.player.dy = 1;
            game.player.isMoving = true;
        };
        down_handlers['a'] = () => {
            game.player.dx = -1;
            game.player.isMoving = true;
        };
        down_handlers['d'] = () => {
            game.player.dx = 1;
            game.player.isMoving = true;
        };
        const up_handlers = new Map();
        up_handlers['w'] = () => {
            if (game.player.dy == -1) {
                game.player.dy = 0;
                if (game.player.dx == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['s'] = () => {
            if (game.player.dy == 1) {
                game.player.dy = 0;
                if (game.player.dx == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['a'] = () => {
            if (game.player.dx == -1) {
                game.player.dx = 0;
                if (game.player.dy == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        up_handlers['d'] = () => {
            if (game.player.dx == 1) {
                game.player.dx = 0;
                if (game.player.dy == 0) {
                    game.player.isMoving = false;
                }
            }
        };
        document.addEventListener('keydown', event => {
            const handler = down_handlers[event.key.toLowerCase()];
            if (handler != undefined)
                handler();
        });
        document.addEventListener('keyup', event => {
            const handler = up_handlers[event.key.toLowerCase()];
            if (handler != undefined)
                handler();
        });
    }
}
//# sourceMappingURL=InputHandler.js.map