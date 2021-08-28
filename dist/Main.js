var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext('2d');
var game = new Game();
game.start();
var statsManager = new StatsManager();
statsManager.hungryDecrease();
statsManager.thirstDecrease();
statsManager.cagarDecrease();
statsManager.energyDecrease();
var dialogDiv = document.getElementById('dialogDiv');
var tutorialDiv = document.getElementById('tutorial');
// let dialogBox = new Dialog(["testando dialogo foda", "frase 2 omg"], "ok fodase.");
var tutorialDialogBox = new Dialog([
    "Bem vindo ao Simulador de Sobrevivência Remake!",
    "Use WASD para controlar o personagem...",
    "Seu objetivo é construir uma canoa para sair da ilha.",
    "Para isso, pegue madeira, mas cuidado pra não morrer no processo kkkk"
], ">>");
tutorialDialogBox.show(tutorialDiv);
// dialogBox.show(dialogDiv);
var lastTime = 0;
function gameLoop(timestamp) {
    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.render(ctx);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
//# sourceMappingURL=Main.js.map