var Mob = /** @class */ (function () {
    function Mob(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Mob.prototype.update = function () {
    };
    Mob.prototype.render = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
    };
    return Mob;
}());
//# sourceMappingURL=EntityManager.js.map