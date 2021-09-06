class Coordinates extends GameObject {
    constructor(x, y, target) {
        super(x, y);
        this.target = target;
        this.targetX = this.target.x;
        this.targetY = this.target.y;
    }
    update() {
        this.targetX = this.target.x;
        this.targetY = this.target.y;
    }
    render(ctx) {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.font = "14px monospace";
        ctx.strokeText(`[${this.targetX.toFixed(2)}, ${this.targetY.toFixed(2)}]`, this.targetX - this.target.width, this.targetY - 15);
        ctx.fillText(`[${this.targetX.toFixed(2)}, ${this.targetY.toFixed(2)}]`, this.targetX - this.target.width, this.targetY - 15);
    }
    setTarget() {
    }
}
//# sourceMappingURL=Coordinates.js.map