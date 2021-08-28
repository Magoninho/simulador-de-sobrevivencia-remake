class Player {

	x: 	number;
	y: 	number;
	dx: number;
	dy: number;
	vx: number;
	vy: number;

	constructor(game, x, y) {
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		
	}
	

	/**
	*
	* @param {number} dx - x direction (-1, 0, 1)
	* @param {number} dy - y direction (-1, 0, 1)
	*
	*/
	public move(dx: number, dy: number): void {
		this.dx = dx;
		this.dy = dy;
	}

	public stop(): void {
		this.dx = 0;
		this.dy = 0;
	}


	public update(deltaTime: number): void {
		this.vx = this.dx * 5;
		this.vy = this.dy * 5;
		
		
		if (this.dx != 0 && this.dy != 0) {
			this.vx /= 1.414;
			this.vy /= 1.414;
		}
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.x < 0) this.x = 0;
		if (this.x > 600 - 20) this.x = 600 - 20;
		if (this.y < 0) this.y = 0;
		if (this.y > 500 - 20) this.y = 500 - 20;

		// console.log(this.vx, this.vy)
		// this.x += 0.5;
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, 20, 20);
	}
}