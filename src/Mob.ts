class Mob {
	x: number;
	y: number;
	width: number;
	height: number;
	// TODO: image

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	public update() {

	}

	public render(ctx): void {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
	}
}