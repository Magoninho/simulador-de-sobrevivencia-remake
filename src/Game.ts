class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;
	blocks: Tile[][];
	levelLayers: Level[];
	mobList: Mob[];

	testeMob: TesteMob;

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass(); // TODO: REMOVE THIS
		this.inputHandler = new InputHandler(this);
		this.player = new Player(game, PLAYER_INITIAL_POSITION_X, PLAYER_INITIAL_POSITION_Y);

		// TODO: make a layers array later

		this.levelLayers = [
			new Ground(LEVEL),
			new Obstacles(LEVEL)
		];

		this.blocks = [];

		for (let layerIndex = 0; layerIndex < this.levelLayers.length; layerIndex++) {
			const layer = this.levelLayers[layerIndex];
			this.blocks.push(layer.buildLevel());
		}

		console.log(this.blocks);

		this.mobList = [
			new Canguru(Math.floor(Math.random() * WORLD_WIDTH - 200) + 200, WORLD_HEIGHT - 200, 200, 100),
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

		for (let layer = 0; layer < this.blocks.length; layer++) {
			const currentLayer = this.blocks[layer];
			for (let blockIndex = 0; blockIndex < currentLayer.length; blockIndex++) {
				const block = currentLayer[blockIndex];
				block.render(ctx);
			}

		}

		// TODO rendering mobs (TODO: isso provavelmente é temporario, checar classe Level)
		for (let mob = 0; mob < this.mobList.length; mob++) {
			this.mobList[mob].render(ctx);
		}
		this.player.render(ctx);

	}
}