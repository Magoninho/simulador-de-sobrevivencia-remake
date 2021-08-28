var Player = /** @class */ (function () {
    function Player(game, x, y) {
        this.x = x;
        this.y = y;
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
        this.vx = this.dx * 5;
        this.vy = this.dy * 5;
        if (this.dx != 0 && this.dy != 0) {
            this.vx /= 1.414;
            this.vy /= 1.414;
        }
        this.x += this.vx;
        this.y += this.vy;
        // console.log(this.vx, this.vy)
        // this.x += 0.5;
    };
    Player.prototype.render = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map