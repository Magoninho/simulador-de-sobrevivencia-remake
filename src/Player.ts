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
		// TODO! important one: change this to AABB collision and change the default collision to getTile, or something like that
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
		this.vx = dx * PLAYER_SPEED * deltaTime;
		this.vy = dy * PLAYER_SPEED * deltaTime;
		
		
		// fixing the faster diagonal problem
		if (dx != 0 && dy != 0) {
			this.vx /= 1.414;
			this.vy /= 1.414;
		}
		
		if (!this.isCollidingWithMob(game.mobList) && !this.isCollidingWithRigidTiles(this.vx, 0)) {
			this.x += this.vx;
		}
		if (!this.isCollidingWithMob(game.mobList) && !this.isCollidingWithRigidTiles(0, this.vy)) {
			this.y += this.vy;
		}

		this.applyTileCollisions(game.blocks[GROUND_LAYER]);
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

	private isCollidingWithRigidTiles(xa: number, ya: number): boolean {

		// The next position the player will walk to
		let nextX: number = this.x + xa;
		let nextY: number = this.y + ya;

		// Now checking if there is collision in the next position in all corners of the square
		// Top left
		let topLeftX: number = nextX;
		let topLeftY: number = nextY;

		// Top right
		let topRightX: number = (nextX + TILESIZE);
		let topRightY: number = nextY;

		// Bottom left
		let bottomLeftX: number = nextX;
		let bottomLeftY: number = (nextY + TILESIZE);

		// Bottom right
		let bottomRightX: number = (nextX + TILESIZE);
		let bottomRightY: number = (nextY + TILESIZE);

		// If there is an error, return false
		try {
			return 	game.levelLayers[0].getTile(topLeftX, topLeftY)			.rigid ||
					game.levelLayers[0].getTile(topRightX, topRightY)		.rigid ||
					game.levelLayers[0].getTile(bottomLeftX, bottomLeftY)	.rigid ||
					game.levelLayers[0].getTile(bottomRightX, bottomRightY)	.rigid;
		} catch (e) {
			return false;
		}

	}

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
		if (this.x > this.game.levelLayers[GROUND_LAYER].getLevel()[0].length * TILESIZE - PLAYER_SIZE) 
			this.x = this.game.levelLayers[GROUND_LAYER].getLevel()[0].length * TILESIZE - PLAYER_SIZE;
		if (this.y < 0) this.y = 0;
		if (this.y > this.game.levelLayers[GROUND_LAYER].getLevel().length * TILESIZE - PLAYER_SIZE) 
			this.y = this.game.levelLayers[GROUND_LAYER].getLevel().length * TILESIZE - PLAYER_SIZE;

		this.playerCoordinates.update();
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.drawImage(this.playerImage, this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
		ctx.fillRect(this.x, this.y, this.width, this.height);

		if (DEBUG) this.playerCoordinates.render(ctx);
	}
}