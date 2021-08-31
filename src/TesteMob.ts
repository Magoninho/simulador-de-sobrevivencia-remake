class TesteMob extends Mob {
	constructor(x: number, y: number, width: number, height: number) {
		super(x, y, width, height);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	public update() {

	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "purple";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}