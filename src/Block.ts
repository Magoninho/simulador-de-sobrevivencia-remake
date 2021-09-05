class Block {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;

	image: HTMLImageElement; // this is a quick solution for testing

	constructor(x: number, y: number, width: number, height: number, color: string, collidable?: boolean, rigid?: boolean) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	public onCollisionEnter(): void {
		// new Dialog(["sexo"], "ok").show("dialog");
	}

	public addImage(image: HTMLImageElement): void {
		this.image = image;
	}

	public update() {

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