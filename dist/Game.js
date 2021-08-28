var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        // instanciate stuff
        this.grass = new Grass();
        this.inputHandler = new InputHandler(this);
        this.player = new Player(this, 200, 150);
    };
    Game.prototype.update = function (deltaTime) {
        this.player.update(deltaTime);
    };
    Game.prototype.render = function (ctx) {
        this.grass.render(ctx);
        this.player.render(ctx);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map