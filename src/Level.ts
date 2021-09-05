class Level {
	level: number[][];
	blocks: Tile[];

	constructor(level: number[][]) {
		this.level = level;
		this.blocks = [];
	}

	public buildLevel(): Tile[] {
		// let blocks = []
		// do stuff
		// return blocks
		// with the blocks, in game loop, loop through all of the blocks and render them


		for (let i = 0; i < this.level.length; i++) {
			for (let j = 0; j < this.level[0].length; j++) {
				let tile: number = this.level[i][j];
				if (tile == 1) {
					// water
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, WATER_BLOCK);
					this.blocks.push(temp);
				} else if (tile == 2) {
					// grass
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, GRASS_BLOCK);
					this.blocks.push(temp);
				} else if (tile == 3) {
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, DIRT_BLOCK);
					this.blocks.push(temp);
				}
			}
		}

		return this.blocks;
	}

	public add(object: Block) {
		this.blocks.push(object);
	}

	public getLevel(): number[][] {
		return this.level;
	}
}