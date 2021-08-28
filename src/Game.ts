class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;

	constructor() {

	}

	start() {
		// instanciate stuff
		this.grass = new Grass();
	}

	update(deltaTime) {

	}

	render(ctx) {
		this.grass.render(ctx);
	}
}