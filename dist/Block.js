var Block = /** @class */ (function () {
    function Block(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Block.prototype.update = function () {
    };
    Block.prototype.render = function (ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    return Block;
}());
//# sourceMappingURL=Block.js.map