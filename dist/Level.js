class Level {
    constructor(level) {
        this.level = level;
        this.blocks = [];
        // TODO: um level poderia aceitar entidades?
        // tipo, this.entities = []
        // pensar nisso depois
    }
    // this will be implemented in subclasses
    buildLevel() {
        return this.blocks;
    }
    getLevel() {
        return this.level;
    }
    getTile(x, y) {
        return this.blocks[x + y * this.level[0].length];
    }
}
//# sourceMappingURL=Level.js.map