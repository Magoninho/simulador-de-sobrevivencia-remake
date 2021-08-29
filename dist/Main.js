var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext('2d');
var game = new Game();
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
var statsManager = new StatsManager();
statsManager.hungryDecrease();
statsManager.thirstDecrease();
statsManager.cagarDecrease();
statsManager.energyDecrease();
var dialogDiv = document.getElementById('dialogDiv');
var tutorialDiv = document.getElementById('tutorial');
// let dialogBox = new Dialog(["testando dialogo foda", "frase 2 omg"], "ok fodase.");
var tutorialDialogBox = new Dialog([
    "Ol\u00E1, " + game.player.name + ".",
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
var cameraX = 0;
var cameraY = 0;
var lastTime = 0;
function gameLoop(timestamp) {
    var deltaTime = timestamp - lastTime;
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
    console.log(cameraX, -WORLD_WIDTH + GAME_WIDTH);
    game.render(ctx);
    ctx.restore();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
//# sourceMappingURL=Main.js.map