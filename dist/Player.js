var Player = /** @class */ (function () {
    function Player(game, x, y) {
        this.x = x;
        this.y = y;
        this.vx = 7;
        this.vy = 7;
        this.dx = 0;
        this.dy = 0;
    }
    /**
    *
    * @param {number} dx - x direction (-1, 0, 1)
    * @param {number} dy - y direction (-1, 0, 1)
    *
    */
    Player.prototype.move = function (dx, dy) {
        this.dx = dx;
        this.dy = dy;
    };
    Player.prototype.stop = function () {
        this.dx = 0;
        this.dy = 0;
    };
    Player.prototype.update = function (deltaTime) {
        this.x += this.vx * this.dx;
        this.y += this.vy * this.dy;
        // this.x += 0.5;
    };
    Player.prototype.render = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map