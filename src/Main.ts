
const canvas = document.getElementById("gamecanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let game: Game = new Game();
game.start();

let statsManager = new StatsManager();
statsManager.hungryDecrease();
statsManager.thirstDecrease();
statsManager.cagarDecrease();
statsManager.energyDecrease();


let dialogDiv = document.getElementById('dialogDiv') as HTMLDivElement;
let tutorialDiv = document.getElementById('tutorial') as HTMLDivElement;


// let dialogBox = new Dialog(["testando dialogo foda", "frase 2 omg"], "ok fodase.");
let tutorialDialogBox = new Dialog([
	"Bem vindo ao Simulador de Sobrevivência Remake!", 
	"Use WASD para controlar o personagem...",
	"Seu objetivo é construir uma canoa para sair da ilha.",
	"Para isso, pegue madeira, mas cuidado pra não morrer no processo kkkk"

], ">>");

tutorialDialogBox.show(tutorialDiv);
// dialogBox.show(dialogDiv);

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