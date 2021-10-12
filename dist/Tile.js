class Tile {
    constructor(x, y, rigid, image) {
        this.x = x;
        this.y = y;
        this.width = TILESIZE;
        this.height = TILESIZE;
        this.color = "purple"; // the default color if no texture provided
        this.image = image;
        this.rigid = rigid;
    }
    onCollisionEnter() {
    }
    render(ctx) {
        if (this.image != undefined) {
            ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
        }
        else {
            ctx.fillStyle = `${this.color}`;
            ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
        }
    }
}
//# sourceMappingURL=Tile.js.map