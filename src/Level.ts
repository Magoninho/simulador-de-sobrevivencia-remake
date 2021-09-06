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
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, WATER_BLOCK);
					temp.onCollisionEnter = () => {
						statsManager.thirstIncrease();
						let drink_audio: HTMLAudioElement = document.getElementById("drink_audio") as HTMLAudioElement;
						if (statsManager.thirst < 100)
							drink_audio.play();
					};
					this.blocks.push(temp);
				} else if (tile == 2) {
					// grass
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, GRASS_BLOCK);
					this.blocks.push(temp);
				} else if (tile == 3) {
					let tempGrass = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, GRASS_BLOCK);
					this.blocks.push(tempGrass);
					let tempTree = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, true, TREE_BLOCK);
					tempTree.onCollisionEnter = () => {
						console.log("madeirakkk");
					};
					this.blocks.push(tempTree);
				}
			}
		}

		return this.blocks;
	}

	public add(object: Tile) {
		this.blocks.push(object);
	}

	public getLevel(): number[][] {
		return this.level;
	}
}