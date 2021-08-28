var canvas = document.getElementById("gamecanvas");
var ctx = canvas.getContext('2d');
var game = new Game();
game.start();
var lastTime = 0;
function gameLoop(timestamp) {
    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, 600, 500);
    game.update(deltaTime);
    game.render(ctx);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
//# sourceMappingURL=Main.js.map