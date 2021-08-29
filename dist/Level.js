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
                if (LEVEL_1[i][j] == 1)
                    blocks.push(new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "rgb(194, 178, 128)"));
                else if (LEVEL_1[i][j] == 0)
                    blocks.push(new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green"));
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