class Game {
    constructor() {
    }
    start() {
        // instanciate stuff
        this.grass = new Grass();
        this.inputHandler = new InputHandler(this);
        this.player = new Player(game, PLAYER_INITIAL_POSITION_X, PLAYER_INITIAL_POSITION_Y);
        this.level = new Level(LEVEL_1);
        this.blocks = this.level.buildLevel();
        this.mobList = [
            new Canguru(Math.floor(Math.random() * WORLD_WIDTH - 200) + 200, WORLD_HEIGHT - 200, 200, 100)
        ];
    }
    update(deltaTime) {
        this.player.update(deltaTime);
        this.mobList[0].update();
    }
    render(ctx) {
        this.grass.render(ctx);
        for (let blockIndex = 0; blockIndex < this.blocks.length; blockIndex++) {
            const block = this.blocks[blockIndex];
            block.render(ctx);
        }
        this.mobList[0].render(ctx);
        this.player.render(ctx);
    }
}
//# sourceMappingURL=Game.js.map