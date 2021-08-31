class Level {
	level: number[][];
	blocks: Block[];

	constructor(level: number[][]) {
		this.level = level;
		this.blocks = [];
	}

	public buildLevel(): Block[] {
		// let blocks = []
		// do stuff
		// return blocks
		// with the blocks, in game loop, loop through all of the blocks and render them


		for (let i = 0; i < this.level.length; i++) {
			for (let j = 0; j < this.level[0].length; j++) {
				let tile: number = this.level[i][j];
				if (tile == 1) {
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "blue", true);
					block.addImage(WATER_BLOCK);
					block.onCollisionEnter = () => {
						new Dialog(["vose bebe aqua"], "ok").show(dialogDiv);
						let audio: HTMLAudioElement = document.getElementById('popup') as HTMLAudioElement;
						audio.play();
						
					};
					this.blocks.push(block);
				} else if (tile == 2) {
					// grass
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
					block.addImage(GRASS_BLOCK);
					this.blocks.push(block);
				} else if (tile == 3) {
					let block = new Block(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, "green");
					block.addImage(DIRT_BLOCK);
					this.blocks.push(block);
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