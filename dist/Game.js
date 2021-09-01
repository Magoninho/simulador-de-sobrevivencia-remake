var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        // instanciate stuff
        this.grass = new Grass();
        this.inputHandler = new InputHandler(this);
        this.player = new Player(game, PLAYER_INITIAL_POSITION_X, PLAYER_INITIAL_POSITION_Y);
        this.level = new Level(LEVEL_1);
        this.blocks = this.level.buildLevel();
        this.mobList = [
            new Canguru(Math.floor(Math.random() * WORLD_WIDTH - 200) + 200, WORLD_HEIGHT - 200, 200, 100)
        ];
    };
    Game.prototype.update = function (deltaTime) {
        this.player.update(deltaTime);
        this.mobList[0].update();
    };
    Game.prototype.render = function (ctx) {
        this.grass.render(ctx);
        for (var blockIndex = 0; blockIndex < this.blocks.length; blockIndex++) {
            var block = this.blocks[blockIndex];
            block.render(ctx);
        }
        this.mobList[0].render(ctx);
        this.player.render(ctx);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map