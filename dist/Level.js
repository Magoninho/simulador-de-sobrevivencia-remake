var Level = /** @class */ (function () {
    function Level(level) {
        this.level = level;
    }
    Level.prototype.buildLevel = function () {
        // let blocks = []
        // do stuff
        // return blocks
        // with the blocks, in game loop, loop through all of the blocks and render them
        var blocks = [];
        for (var i = 0; i < this.level.length; i++) {
            for (var j = 0; j < this.level[0].length; j++) {
                if (this.level[i][j] == 1) {
                    var block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "rgb(194, 178, 128)");
                    block.addImage(SAND_BLOCK);
                    blocks.push(block);
                }
                else if (this.level[i][j] == 2) {
                    // grass
                    var block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
                    block.addImage(GRASS_BLOCK);
                    blocks.push(block);
                }
            }
        }
        return blocks;
    };
    Level.prototype.getLevel = function () {
        return this.level;
    };
    return Level;
}());
//# sourceMappingURL=Level.js.map