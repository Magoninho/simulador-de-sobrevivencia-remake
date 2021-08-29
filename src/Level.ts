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
				if (LEVEL_1[i][j] == 1)
					blocks.push(new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "rgb(194, 178, 128)"));
				else if (LEVEL_1[i][j] == 0)
					blocks.push(new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green"));
			}
		}

		return blocks;
	}

	public getLevel(): number[][] {
		return this.level;
	}
}