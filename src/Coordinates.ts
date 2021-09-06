class Coordinates extends GameObject {
	target: Mob;
	x: number;
	y: number;

	targetX: number;
	targetY: number;

	constructor(x: number, y: number, target: Mob) {
		super(x, y);
		this.target = target;
		this.targetX = this.target.x;
		this.targetY = this.target.y;
	}

	public update() {
		this.targetX = this.target.x;
		this.targetY = this.target.y;
	}

	public render(ctx) {
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.font = "14px monospace";
		ctx.strokeText(`[${this.targetX.toFixed(2)}, ${this.targetY.toFixed(2)}]`, this.targetX - this.target.width, this.targetY - 15);
		ctx.fillText(`[${this.targetX.toFixed(2)}, ${this.targetY.toFixed(2)}]`, this.targetX - this.target.width, this.targetY - 15);
	}

	public setTarget() {

	}
}