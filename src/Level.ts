class Level {
	level: number[][];

	constructor(level: number[][]) {
		this.level = level;
	}

	public buildLevel(): Block[] {
		// let blocks = []
		// do stuff
		// return blocks
		// with the blocks, in game loop, loop through all of the blocks and render them

		let blocks: Block[] = [];

		for (let i = 0; i < this.level.length; i++) {
			for (let j = 0; j < this.level[0].length; j++) {
				if (this.level[i][j] == 1) {
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "rgb(194, 178, 128)");

					block.addImage(SAND_BLOCK);
					blocks.push(block);
				} else if (this.level[i][j] == 2) {
					// grass
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
					block.addImage(GRASS_BLOCK);
					blocks.push(block);
				} else if (this.level[i][j] == 3) {
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
					block.addImage(DIRT_BLOCK);
					blocks.push(block);
				}
			}
		}

		return blocks;
	}

	public getLevel(): number[][] {
		return this.level;
	}
}