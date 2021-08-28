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
		this.vx = 7;
		this.vy = 7;
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
		this.x += this.vx * this.dx;
		this.y += this.vy * this.dy;
		// this.x += 0.5;
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, 20, 20);
	}
}