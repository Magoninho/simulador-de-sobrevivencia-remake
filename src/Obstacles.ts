class Obstacles extends Level {
	constructor(level: number[][]) {
		super(level);
		this.level = level;
	}

	public buildLevel(): Tile[] {
		for (let i = 0; i < this.level.length; i++) {
			for (let j = 0; j < this.level[0].length; j++) {
				let tile: number = this.level[i][j];
				if (tile == 3) {

					// generating trees (obstacles)

					let tempTree = new Tile(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE, true, TREE_BLOCK);
					tempTree.onCollisionEnter = () => {
						new Dialog(["voce pega madeira kkk"], "ok massa").show("dialogs");
					};
					this.blocks.push(tempTree);
				}
			}
		}
		return this.blocks;
	}

	public getLevel(): number[][] {
		return this.level;
	}
}