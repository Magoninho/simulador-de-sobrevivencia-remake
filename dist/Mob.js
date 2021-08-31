var Mob = /** @class */ (function () {
    function Mob(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    Mob.prototype.update = function () {
    };
    Mob.prototype.render = function (ctx) {
        if (this.image != undefined) {
            ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
        }
        else {
            ctx.fillStyle = "purple";
            ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
        }
    };
    return Mob;
}());
//# sourceMappingURL=Mob.js.map