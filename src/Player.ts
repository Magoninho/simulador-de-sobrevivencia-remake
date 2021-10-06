class Player extends Mob {

	x: number;
	y: number;
	dx: number;
	dy: number;
	vx: number;
	vy: number;
	game: Game;
	playerImage: HTMLImageElement;
	isMoving: boolean;
	playerCoordinates: Coordinates;

	name: string;

	constructor(game: Game, x: number, y: number) {
		super(x, y, PLAYER_SIZE, PLAYER_SIZE);
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.game = game;
		this.playerImage = new Image(PLAYER_SIZE, PLAYER_SIZE);
		this.playerImage.src = "../images/profile.png";
		this.isMoving = false;

		this.playerCoordinates = new Coordinates(10, 15, this);

		// this will make sure (almost) that the player won't spawn suffocated in a block
		while (getTileAt(this.x, this.y, LEVEL) == 1 ||
			getTileAt(this.x, this.y, LEVEL) == 3) {
			// todo: change this later
			this.x = Math.floor(Math.random() * WORLD_WIDTH / 2) + 200;
			this.y = Math.floor(Math.random() * WORLD_HEIGHT / 2) + 200;
		}
		console.log("achou uma posição boa na " + this.x + " " + this.y);
	}


	/**
	*
	* @param {number} dx - x direction (-1, 0, 1)
	* @param {number} dy - y direction (-1, 0, 1)
	*
	*/
	public move(dx: number, dy: number, deltaTime: number): void {
		if (!this.isCollidingWithMob(game.mobList) && !this.isCollidingWithRigidTiles(game.blocks[OBSTACLES_LAYER])) {
			this.vx = dx * PLAYER_SPEED * deltaTime;
			this.vy = dy * PLAYER_SPEED * deltaTime;


			// fixing the faster diagonal problem
			if (dx != 0 && dy != 0) {
				this.vx /= 1.414;
				this.vy /= 1.414;
			}

			this.x += this.vx;
			this.y += this.vy;
			// this will check collisions with tiles that have collision functions defined
			this.applyTileCollisions(game.blocks[GROUND_LAYER]);
			this.applyTileCollisions(game.blocks[OBSTACLES_LAYER]);
		}

	}





	// TODO: fazer um array com walls e um loop pra testar colisão com cada um dentro dessa função
	// TODO: renomear para isCollidingWithWalls pra fazer sentido essa alteração


	// FIXME: TA TUDO UMA BOSTA
	private isCollidingWithMob(arr: Mob[]): boolean {
		for (let index = 0; index < arr.length; index++) {
			// if (arr[index]) {
			if (this.x + (this.dx * 10) < arr[index].x + arr[index].width &&
				this.x + (this.dx * 10) + PLAYER_SIZE > arr[index].x &&
				this.y + (this.dy * 10) < arr[index].y + arr[index].height &&
				this.y + (this.dy * 10) + PLAYER_SIZE > arr[index].y) {
				arr[index].onCollisionEnter();
				return true;
				// }
			}
		}
		return false;
	}

	// TODO: move this function to another place idk
	private isCollidingWithRigidTiles(arr: Tile[]): boolean {
		for (let index = 0; index < arr.length; index++) {
			if (this.x + (this.dx * 10) < arr[index].x + arr[index].width &&
				this.x + (this.dx * 10) + PLAYER_SIZE > arr[index].x &&
				this.y + (this.dy * 10) < arr[index].y + arr[index].height &&
				this.y + (this.dy * 10) + PLAYER_SIZE > arr[index].y &&
				arr[index].rigid) {
				return true;
			}
		}
		return false;
	}

	// TODO: ask for level as parameter, and loop through the level and then make the collisions with all tiles
	private applyTileCollisions(arr: Tile[]): void {
		for (let index = 0; index < arr.length; index++) {
			if (this.x + (this.dx * 10) < arr[index].x + arr[index].width &&
				this.x + (this.dx * 10) + PLAYER_SIZE > arr[index].x &&
				this.y + (this.dy * 10) < arr[index].y + arr[index].height &&
				this.y + (this.dy * 10) + PLAYER_SIZE > arr[index].y) {
				arr[index].onCollisionEnter();
				break; // this is the most important break i've ever done, literally
			}
		}
	}

	public update(deltaTime: number): void {

		if (this.isMoving) game.statsManager.energyDecrease();

		// if (!this.isCollidingWithMob(game.mobList) && !this.isCollidingWithRigidTiles(game.blocks[OBSTACLES_LAYER])) {
		this.move(this.dx, this.dy, deltaTime);


		

		// }



		// dont pass the limits
		if (this.x < 0) this.x = 0;
		if (this.x > this.game.levelLayers[GROUND_LAYER].getLevel()[0].length * TILESIZE - PLAYER_SIZE) this.x = this.game.levelLayers[GROUND_LAYER].getLevel()[0].length * TILESIZE - PLAYER_SIZE;
		if (this.y < 0) this.y = 0;
		if (this.y > this.game.levelLayers[GROUND_LAYER].getLevel().length * TILESIZE - PLAYER_SIZE) this.y = this.game.levelLayers[1].getLevel().length * TILESIZE - PLAYER_SIZE;

		this.playerCoordinates.update();
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.drawImage(this.playerImage, this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);

		if (DEBUG) this.playerCoordinates.render(ctx);
	}
}