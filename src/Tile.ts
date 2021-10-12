class Tile {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	rigid: boolean;
	spriteRow: number;
	spriteCol: number;

	constructor(x: number, y: number, spriteRow: number, spriteCol: number, rigid: boolean) {
		this.x = x;
		this.y = y;
		this.width = TILESIZE;
		this.height = TILESIZE;
		this.spriteRow = spriteRow;
		this.spriteCol = spriteCol;
		this.color = "purple"; // the default color if no texture provided
		this.rigid = rigid;
	}

	public onCollisionEnter() {
	}

	render(ctx: CanvasRenderingContext2D): void {
		// if (this.image != undefined) {
		// 	ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
		// } else {
		// 	ctx.fillStyle = `${this.color}`;
		// 	ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
		// }
		ctx.drawImage(
			game.spritesheet,
			this.spriteCol * this.height,
			this.spriteRow * this.width,
			this.width,
			this.height,
			this.x, 
			this.y,
			this.width+1,
			this.height+1
		);

	}
}