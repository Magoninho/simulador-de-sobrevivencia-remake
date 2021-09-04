const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext('2d');
let game = new Game();
game.start();
// let pName = document.createElement('P');
// game.player.name = window.prompt("Qual o nome do seu jogador? (Máx: 10)");
// if (!game.player.name) {
// 	game.player.name = "Gustavo";
// } else {
// 	game.player.name = game.player.name.substring(0, 10);
// }
// pName.innerHTML = game.player.name;
// document.getElementById("profile").appendChild(pName);
let statsManager = new StatsManager();
statsManager.hungryDecrease();
statsManager.thirstDecrease();
statsManager.cagarDecrease();
statsManager.energyDecrease();
generateMap(10, 10);
let dialogDiv = document.getElementById('dialogDiv');
let tutorialDiv = document.getElementById('tutorial');
// let dialogBox = new Dialog(["testando dialogo foda", "frase 2 omg"], "ok fodase.");
let tutorialDialogBox = new Dialog([
    `Olá, ${game.player.name}.`,
    "Bem vindo ao Simulador de Sobrevivência Remake!",
    "Use <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> para controlar o personagem...",
    "Seu objetivo é construir uma canoa para sair da ilha.",
    "Para isso, pegue madeira, mas cuidado pra não morrer no processo kkkk"
], ">>");
tutorialDialogBox.show(tutorialDiv);
// dialogBox.show(dialogDiv);
function lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1;
}
// TODO: organize the camera thing
let cameraX = -game.player.x + GAME_WIDTH / 2;
let cameraY = -game.player.y + GAME_HEIGHT / 2;
let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.save();
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    cameraX = lerp(cameraX, -game.player.x + GAME_WIDTH / 2, 0.1);
    cameraY = lerp(cameraY, -game.player.y + GAME_HEIGHT / 2, 0.1);
    cameraX = Math.min(0, cameraX);
    cameraY = Math.min(0, cameraY);
    cameraX = Math.max(cameraX, -WORLD_WIDTH + GAME_WIDTH);
    cameraY = Math.max(cameraY, -WORLD_HEIGHT + GAME_HEIGHT);
    ctx.translate(cameraX, cameraY);
    // console.log(cameraX);
    game.render(ctx);
    ctx.restore();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
//# sourceMappingURL=Main.js.map