class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass();
		this.inputHandler = new InputHandler(this);
		this.player = new Player(this, 200, 150);
	}

	update(deltaTime) {
		this.player.update(deltaTime);
	}

	render(ctx) {
		this.grass.render(ctx);
		this.player.render(ctx);
	}
}