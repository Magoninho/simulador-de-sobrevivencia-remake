// TODO: finish this up
class SpriteSheet {

	spritesheet: HTMLImageElement;
	cols: number;
	rows: number;
	tilesize: number;
	sprites: HTMLImageElement[][];

	constructor(path: string, tilesize: number) {
		this.spritesheet = new Image() as HTMLImageElement;
		this.spritesheet.src = path;
		this.tilesize = tilesize;
		this.cols = this.spritesheet.width / this.tilesize;
		this.rows = this.spritesheet.height / this.tilesize;
		this.sprites = new Array(this.rows * this.cols);

		// // creating 2d array for all sprites in matrix
		// for (let col = 0; col < this.cols; col++) {
		// 	this.sprites.push(new Array(this.cols));
		// }

		// for (let row = 0; row < this.rows; row++) {
		// 	for (let col = 0; col < this.cols; col++) {
		// 		this.sprites[row][col] = 
		// 	}
		// }
		
	}

	public drawSprite(row: number, col: number): void {
		// ctx.drawImage(
			
		// );
	}
}