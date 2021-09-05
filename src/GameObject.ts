class GameObject {
	x: number;
	y: number;

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	update() {
	}

	render(ctx) {
	}

	setX(x: number): void {
		this.x = x;
	}
	setY(y: number): void {
		this.y = y;
	}

	getPosition(): number[] {
		return [this.x, this.y];
	}

}