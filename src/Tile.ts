class Tile {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	image: HTMLImageElement;
	rigid: boolean;

	constructor(x: number, y: number, rigid: boolean, image?: HTMLImageElement) {
		this.x = x;
		this.y = y;
		this.width = TILESIZE;
		this.height = TILESIZE;
		this.color = "purple"; // the default color if no texture provided
		this.image = image;
		this.rigid = rigid;
	}

	public onCollisionEnter() {
	}

	render(ctx): void {
		if (this.image != undefined) {
			ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
		} else {
			ctx.fillStyle = `${this.color}`;
			ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
		}
	}
}