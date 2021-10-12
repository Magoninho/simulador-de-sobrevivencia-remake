class Tile {
    constructor(x, y, spriteRow, spriteCol, rigid) {
        this.x = x;
        this.y = y;
        this.width = TILESIZE;
        this.height = TILESIZE;
        this.spriteRow = spriteRow;
        this.spriteCol = spriteCol;
        this.color = "purple"; // the default color if no texture provided
        this.rigid = rigid;
    }
    onCollisionEnter() {
    }
    render(ctx) {
        // if (this.image != undefined) {
        // 	ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
        // } else {
        // 	ctx.fillStyle = `${this.color}`;
        // 	ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
        // }
        ctx.drawImage(game.spritesheet, this.spriteCol * this.height, this.spriteRow * this.width, this.width, this.height, this.x, this.y, this.width + 1, this.height + 1);
    }
}
//# sourceMappingURL=Tile.js.map