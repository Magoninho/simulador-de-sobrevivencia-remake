
const canvas = document.getElementById("gamecanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let game = new Game();
game.start();



let lastTime = 0;
function gameLoop(timestamp: number): void {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.clearRect(0, 0, 400, 300);

	game.update(deltaTime);
	game.render(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);