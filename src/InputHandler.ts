class InputHandler {
	constructor(game: Game) {
		document.addEventListener('keydown', event => {
			switch (event.key) {
				case 'w':
					game.player.dy = -1;
					game.player.isMoving = true;
					break;
				case 's':
					// move down
					game.player.dy = 1;
					game.player.isMoving = true;
					break;
				case 'a':
					// move left
					game.player.dx = -1;
					game.player.isMoving = true;
					break;
				case 'd':
					// move right
					game.player.dx = 1;
					game.player.isMoving = true;
					break;

				case 'W':
					game.player.dy = -1;
					game.player.isMoving = true;
					break;
				case 'S':
					// move down
					game.player.dy = 1;
					game.player.isMoving = true;
					break;
				case 'A':
					// move left
					game.player.dx = -1;
					game.player.isMoving = true;
					break;
				case 'D':
					// move right
					game.player.dx = 1;
					game.player.isMoving = true;
					console.log(game.player.vx)
					break;
			}
		});

		document.addEventListener('keyup', event => {
			switch (event.key) {
				case 'w':
					game.player.dy = 0;
					game.player.isMoving = false;
					break;
				case 's':
					game.player.dy = 0;
					game.player.isMoving = false;
					// move down
					break;
				case 'a':
					game.player.dx = 0;
					game.player.isMoving = false;
					// move left
					break;
				case 'd':
					game.player.dx = 0;
					game.player.isMoving = false;
					// move right
					break;

				case 'W':
					game.player.dy = 0;
					game.player.isMoving = false;
					break;
				case 'S':
					game.player.dy = 0;
					game.player.isMoving = false;
					// move down
					break;
				case 'A':
					game.player.dx = 0;
					game.player.isMoving = false;
					// move left
					break;
				case 'D':
					game.player.dx = 0;
					game.player.isMoving = false;
					// move right
					break;
			}
		});
	}
}