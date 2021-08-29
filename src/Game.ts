class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;
	level: Level;
	blocks: Block[];

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass();
		this.inputHandler = new InputHandler(this);
		this.player = new Player(game, WORLD_WIDTH/2, WORLD_HEIGHT/2);
		this.level = new Level(LEVEL_1);

		this.blocks = this.level.buildLevel();
	}

	update(deltaTime) {
		this.player.update(deltaTime);
	}

	render(ctx) {
		
		this.grass.render(ctx);
		for (let blockIndex = 0; blockIndex < this.blocks.length; blockIndex++) {
			const block = this.blocks[blockIndex];
			block.render(ctx);
		}
		this.player.render(ctx);
	}
}