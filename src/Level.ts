class Level {
	level: number[][];
	blocks: Tile[];

	constructor(level: number[][]) {
		this.level = level;
		this.blocks = [];

		// TODO: um level poderia aceitar entidades?
		// tipo, this.entities = []
		// pensar nisso depois
	}

	// this will be implemented in subclasses
	public buildLevel(): Tile[] {
		return this.blocks;
	}

	public getLevel(): number[][] {
		return this.level;
	}

	public getTile(x: number, y: number): Tile {
		return this.blocks[x + y * this.level[0].length];
	}
}