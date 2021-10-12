// TODO: finish this up
class SpriteSheet {
    constructor(path, tilesize) {
        this.spritesheet = new Image();
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
    drawSprite(row, col) {
        // ctx.drawImage(
        // );
    }
}
//# sourceMappingURL=SpriteSheet.js.map