class Level {
    constructor(level) {
        this.level = level;
        this.blocks = [];
    }
    buildLevel() {
        // let blocks = []
        // do stuff
        // return blocks
        // with the blocks, in game loop, loop through all of the blocks and render them
        for (let i = 0; i < this.level.length; i++) {
            for (let j = 0; j < this.level[0].length; j++) {
                let tile = this.level[i][j];
                if (tile == 1) {
                    // water
                    let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, WATER_BLOCK);
                    temp.onCollisionEnter = () => {
                        statsManager.thirstIncrease(0.1);
                        let drink_audio = document.getElementById("drink_audio");
                        if (statsManager.thirst < 100)
                            drink_audio.play();
                    };
                    this.blocks.push(temp);
                }
                else if (tile == 2) {
                    // grass
                    let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, GRASS_BLOCK);
                    this.blocks.push(temp);
                }
                else if (tile == 3) {
                    let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, DIRT_BLOCK);
                    this.blocks.push(temp);
                }
            }
        }
        return this.blocks;
    }
    add(object) {
        this.blocks.push(object);
    }
    getLevel() {
        return this.level;
    }
}
//# sourceMappingURL=Level.js.map