class Block {
	x: number;
	y: number;
	width: number;
	height: number;
	collidable: boolean;
	color: string;

	constructor(x: number, y: number, width: number, height: number, color: string, collidable?: boolean) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.collidable = collidable;
		this.color = color;
	}

	public onInteract(): void {
		
	}

	public update() {

	}

	render(ctx) {
		ctx.fillStyle = `${this.color}`;
		ctx.fillRect(this.x, this.y, this.width+1, this.height+1);
	}
}