class TesteMob extends Mob {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    update() {
    }
    render(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
//# sourceMappingURL=TesteMob.js.map