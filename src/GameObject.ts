class GameObject {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public update(deltaTime: number) {
	}

	public render(ctx) {
	}

	public setX(x: number): void {
		this.x = x;
	}
	public setY(y: number): void {
		this.y = y;
	}

	public getPosition(): number[] {
		return [this.x, this.y];
	}

	public setPosition(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

}