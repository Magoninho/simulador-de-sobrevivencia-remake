class Grass {
	constructor() {

	}

	render(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = "rgb(0,159,225)";
		ctx.fillRect(-GAME_WIDTH, -GAME_HEIGHT, GAME_WIDTH*4, GAME_HEIGHT*4);
	}
}