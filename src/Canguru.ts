class Canguru extends Mob {
	constructor(x: number, y: number, width: number, height: number, image?: HTMLImageElement) {
		super(x, y, width, height);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = new GraphicsLoader().loadGraphics('../images/canguru.png');
	}
}