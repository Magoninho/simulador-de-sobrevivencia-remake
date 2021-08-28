class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;
	block: Block;

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass();
		this.inputHandler = new InputHandler(this);
		this.block = new Block(100, 100, 20, 20);
		this.player = new Player(game, 200, 150);
	}

	update(deltaTime) {
		this.player.update(deltaTime);
	}

	render(ctx) {
		this.grass.render(ctx);
		this.player.render(ctx);
		this.block.render(ctx);
	}
}