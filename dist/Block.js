class Block {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    onCollisionEnter() {
    }
    addImage(image) {
        this.image = image;
    }
    update() {
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
//# sourceMappingURL=Block.js.map