var Grass = /** @class */ (function () {
    function Grass() {
    }
    Grass.prototype.render = function (ctx) {
        ctx.fillStyle = "rgb(0,159,225)";
        ctx.fillRect(-GAME_WIDTH, -GAME_HEIGHT, GAME_WIDTH * 6, GAME_HEIGHT * 6);
    };
    return Grass;
}());
//# sourceMappingURL=Grass.js.map