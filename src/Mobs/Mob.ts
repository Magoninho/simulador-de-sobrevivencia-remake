class Mob extends GameObject {
	x: number;
	y: number;
	width: number;
	height: number;
	image: HTMLImageElement;
	defeated: boolean;

	dialog: Dialog;

	constructor(x: number, y: number, width: number, height: number, image?: HTMLImageElement) {
		super(x, y);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = image;
	}


	public update(deltaTime: number): void {
	}

	public render(ctx): void {
		if (this.image != undefined) {
			ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
		} else {
			ctx.fillStyle = "purple";
			ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
		}
	}

	public onCollisionEnter() {
		this.dialog = new Dialog(["voce encostou num mob qualquer"], "ok");
		this.dialog.show("dialogs");
	}
}