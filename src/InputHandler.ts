class InputHandler {
	constructor(game: Game) {
		document.addEventListener('keydown', event => {
			switch (event.key) {
				case 'w':
					game.player.dy = -1;
					break;
				case 's':
					// move down
					game.player.dy = 1;
					break;
				case 'a':
					// move left
					game.player.dx = -1;
					break;
				case 'd':
					// move right
					game.player.dx = 1;
					break;

				case 'W':
					game.player.dy = -1;
					break;
				case 'S':
					// move down
					game.player.dy = 1;
					break;
				case 'A':
					// move left
					game.player.dx = -1;
					break;
				case 'D':
					// move right
					game.player.dx = 1;
					break;
			}
		});

		document.addEventListener('keyup', event => {
			switch (event.key) {
				case 'w':
					game.player.dy = 0;
					break;
				case 's':
					game.player.dy = 0;
					// move down
					break;
				case 'a':
					game.player.dx = 0;
					// move left
					break;
				case 'd':
					game.player.dx = 0;
					// move right
					break;

				case 'W':
					game.player.dy = 0;
					break;
				case 'S':
					game.player.dy = 0;
					// move down
					break;
				case 'A':
					game.player.dx = 0;
					// move left
					break;
				case 'D':
					game.player.dx = 0;
					// move right
					break;
			}
		});
	}
}