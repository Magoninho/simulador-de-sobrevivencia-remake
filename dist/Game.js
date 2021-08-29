var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        // instanciate stuff
        this.grass = new Grass();
        this.inputHandler = new InputHandler(this);
        this.player = new Player(game, GAME_WIDTH / 2, GAME_HEIGHT / 2);
        this.level = new Level(LEVEL_1);
        this.blocks = this.level.buildLevel();
    };
    Game.prototype.update = function (deltaTime) {
        this.player.update(deltaTime);
    };
    Game.prototype.render = function (ctx) {
        this.grass.render(ctx);
        for (var blockIndex = 0; blockIndex < this.blocks.length; blockIndex++) {
            var block = this.blocks[blockIndex];
            block.render(ctx);
        }
        this.player.render(ctx);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map