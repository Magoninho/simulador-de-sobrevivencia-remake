var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        // instanciate stuff
        this.grass = new Grass();
    };
    Game.prototype.update = function (deltaTime) {
    };
    Game.prototype.render = function (ctx) {
        this.grass.render(ctx);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map