class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;
	level: Level;
	blocks: Tile[];
	mobList: Mob[];

	testeMob: TesteMob;

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass(); // TODO: REMOVE THIS
		this.inputHandler = new InputHandler(this);
		this.player = new Player(game, PLAYER_INITIAL_POSITION_X, PLAYER_INITIAL_POSITION_Y);
		this.level = new Level(LEVEL_1);
		this.blocks = this.level.buildLevel();

		this.mobList = [
			new Canguru(Math.floor(Math.random() * WORLD_WIDTH-200) + 200, WORLD_HEIGHT-200, 200, 100),
			new Canguru(200, 100, 200, 100)
		];
		

	}

	update(deltaTime) {
		this.player.update(deltaTime);
		for (let mob = 0; mob < this.mobList.length; mob++) {
			if (this.mobList[mob].defeated) {
				if (mob > -1) {
					// removing the mob from the array if defeated
					this.mobList.splice(mob, 1);
				}
				continue;
			}

			this.mobList[mob].update(deltaTime);
		}

		statsManager.update();
	}

	render(ctx) {
		
		this.grass.render(ctx);
		for (let blockIndex = 0; blockIndex < this.blocks.length; blockIndex++) {
			const block = this.blocks[blockIndex];
			block.render(ctx);
		}
		for (let mob = 0; mob < this.mobList.length; mob++) {
			this.mobList[mob].render(ctx);
		}
		this.player.render(ctx);
		
	}
}