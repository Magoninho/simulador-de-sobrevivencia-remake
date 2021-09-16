class Ground extends Level {

	constructor(level: number[][]) {
		super(level);
		this.level = level; // TODO: testar se tirando isso funciona do mesmo jeito (provavelmente sim)
	}

	public buildLevel(): Tile[] {
		for (let i = 0; i < this.level.length; i++) {
			for (let j = 0; j < this.level[0].length; j++) {
				let tile: number = this.level[i][j];
				if (tile == 1) {
					// water
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, WATER_BLOCK);
					temp.onCollisionEnter = () => {
						game.statsManager.thirstIncrease(0.2);
						let drink_audio: HTMLAudioElement = document.getElementById("drink_audio") as HTMLAudioElement;
						if (game.statsManager.thirst < 100)
							drink_audio.play();
					};
					this.blocks.push(temp);
				} else if (tile == 2) {
					// grass
					let temp = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, GRASS_BLOCK);
					this.blocks.push(temp);
				} else if (tile == 3) {

					// FIXME: Separate the level in layers so i wont do this shit anymore
					let tempGrass = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, false, GRASS_BLOCK);
					this.blocks.push(tempGrass);
					// let tempTree = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, true, TREE_BLOCK);
					// tempTree.onCollisionEnter = () => {
					// 	new Dialog(["voce pega madeira kkk"], "ok massa").show("dialogs");
					// };
					// this.blocks.push(tempTree);
				}
			}
		}

		return this.blocks;
	}

	// public add(object: Tile) {
	// 	this.blocks.push(object);
	// }

	public getLevel(): number[][] {
		return this.level;
	}

	public getTile(x: number, y: number): Tile {
		return this.blocks[x + y * this.level[0].length];
	}
}