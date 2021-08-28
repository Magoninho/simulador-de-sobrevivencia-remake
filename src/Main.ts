
const canvas = document.getElementById("gamecanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let game: Game = new Game();
game.start();



let lastTime: number = 0;
function gameLoop(timestamp: number): void {
	let deltaTime: number = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

	game.update(deltaTime);
	game.render(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);