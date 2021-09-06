const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext('2d');
let game = new Game();
game.start();
game.player.setPosition(0, 0);
let popup = new PopUp().popUp('esse jogo ainda tá em fase de desenvolvimento<br>tem 2 cangurus no mapa<br>voce pode beber aqua<br>ignora a mensagem que aparece quando voce encosta na arvore, não vai ser assim o sistema de coleta de madeira pode ficar tranquilo<br>eu provavelmente vou tentar fazer um sistema de coleta usando o mouse mesmo, vai ser bem simples (não de fazer, mas como funciona kk)', () => {
    // WARNING: THIS IS TEMPORARY
    let theme = document.getElementById('theme1'); // TODO: Make a class for audio
    theme.play();
    theme.addEventListener('ended', () => {
        document.getElementById('theme3').play();
    });
});
// TODO: MOVE THIS TO THE GAME CLASS
let statsManager = new StatsManager();
statsManager.hungryDecrease();
statsManager.thirstDecrease();
statsManager.cagarDecrease();
statsManager.energyDecrease();
let dialogDiv = document.getElementById('dialogDiv');
let tutorialDiv = document.getElementById('tutorial');
let tutorialDialogBox = new Dialog([
    `Olá, ${game.player.name}.`,
    "Bem vindo ao Simulador de Sobrevivência Remake!",
    "Use <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> para controlar o personagem...",
    "Seu objetivo é construir uma canoa para sair da ilha.",
    "Para isso, pegue madeira, mas cuidado pra não morrer no processo kkkk"
], ">>");
tutorialDialogBox.show("dialogs");
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