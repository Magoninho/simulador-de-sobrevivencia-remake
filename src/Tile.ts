class Tile {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	image: HTMLImageElement;

	constructor(x: number, y: number, width: number, height: number, image?: HTMLImageElement) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = "purple"; // the default color if no texture provided
		this.image = image;
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