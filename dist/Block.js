var Block = /** @class */ (function () {
    function Block(x, y, width, height, color, collidable) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.collidable = collidable;
        this.color = color;
    }
    Block.prototype.onInteract = function () {
    };
    Block.prototype.addImage = function (image) {
        this.image = image;
    };
    Block.prototype.update = function () {
    };
    Block.prototype.render = function (ctx) {
        if (this.image != undefined) {
            ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
        }
        else {
            ctx.fillStyle = "" + this.color;
            ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
        }
    };
    return Block;
}());
//# sourceMappingURL=Block.js.map