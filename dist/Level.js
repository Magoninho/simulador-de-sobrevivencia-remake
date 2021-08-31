var Level = /** @class */ (function () {
    function Level(level) {
        this.level = level;
        this.blocks = [];
    }
    Level.prototype.buildLevel = function () {
        // let blocks = []
        // do stuff
        // return blocks
        // with the blocks, in game loop, loop through all of the blocks and render them
        for (var i = 0; i < this.level.length; i++) {
            for (var j = 0; j < this.level[0].length; j++) {
                var tile = this.level[i][j];
                if (tile == 1) {
                    var block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "blue");
                    block.addImage(WATER_BLOCK);
                    block.onCollisionEnter = function () {
                        new Dialog(["vose bebe aqua"], "ok").show(dialogDiv);
                        var audio = document.getElementById('popup');
                        audio.play();
                    };
                    this.blocks.push(block);
                }
                else if (tile == 2) {
                    // grass
                    var block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
                    block.addImage(GRASS_BLOCK);
                    this.blocks.push(block);
                }
                else if (tile == 3) {
                    var block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
                    block.addImage(DIRT_BLOCK);
                    this.blocks.push(block);
                }
            }
        }
        return this.blocks;
    };
    Level.prototype.add = function (object) {
        this.blocks.push(object);
    };
    Level.prototype.getLevel = function () {
        return this.level;
    };
    return Level;
}());
//# sourceMappingURL=Level.js.map