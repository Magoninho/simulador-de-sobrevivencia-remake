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
                    let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "blue");
                    block.addImage(WATER_BLOCK);
                    block.onCollisionEnter = () => {
                        new Dialog(["vose bebe aqua"], "ok").show(dialogDiv);
                        let audio = document.getElementById('popup');
                        audio.play();
                    };
                    this.blocks.push(block);
                }
                else if (tile == 2) {
                    // grass
                    let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
                    block.addImage(GRASS_BLOCK);
                    this.blocks.push(block);
                }
                else if (tile == 3) {
                    let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
                    block.addImage(DIRT_BLOCK);
                    this.blocks.push(block);
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