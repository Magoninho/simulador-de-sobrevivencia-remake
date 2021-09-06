class GameObject {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	update(deltaTime: number) {
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