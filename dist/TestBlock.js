var TestBlock = /** @class */ (function () {
    function TestBlock(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    TestBlock.prototype.update = function () {
    };
    TestBlock.prototype.render = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
    };
    return TestBlock;
}());
//# sourceMappingURL=TestBlock.js.map