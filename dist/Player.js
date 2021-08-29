var Player = /** @class */ (function () {
    function Player(game, x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.game = game;
        this.playerImage = new Image(PLAYER_SIZE, PLAYER_SIZE);
        this.playerImage.src = "../images/profile.png";
        this.isMoving = false;
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
    // TODO: fazer um array com walls e um loop pra testar colisão com cada um dentro dessa função
    // TODO: renomear para isCollidingWithWalls pra fazer sentido essa alteração
    Player.prototype.isColliding = function (dx, dy) {
        for (var block = 0; block < game.blocks.length; block++) {
            if (game.blocks[block].collidable) {
                if (this.x + (dx * 10) < game.blocks[block].x + game.blocks[block].width &&
                    this.x + (dx * 10) + PLAYER_SIZE > game.blocks[block].x &&
                    this.y + (dy * 10) < game.blocks[block].y + game.blocks[block].height &&
                    this.y + (dy * 10) + PLAYER_SIZE > game.blocks[block].y) {
                    return true;
                }
            }
        }
        return false;
    };
    Player.prototype.interactWith = function (object) {
        object.onInteract();
    };
    Player.prototype.update = function (deltaTime) {
        if (this.isMoving)
            statsManager.energyDecrease();
        var currentBlock;
        for (var block = 0; block < game.blocks.length; block++) {
            currentBlock = game.blocks[block];
        }
        if (!this.isColliding(this.dx, this.dy)) {
            this.vx = this.dx * PLAYER_SPEED;
            this.vy = this.dy * PLAYER_SPEED;
            if (this.dx != 0 && this.dy != 0) {
                this.vx /= 1.414;
                this.vy /= 1.414;
            }
            this.x += this.vx;
            this.y += this.vy;
        }
        else {
            new Dialog(["Voce colidiu com um bloco", "KKKKKKKK"], "ok").show(dialogDiv);
        }
        // }
        // dont pass the limits
        if (this.x < 0)
            this.x = 0;
        if (this.x > this.game.level.getLevel()[0].length * TILESIZE - PLAYER_SIZE)
            this.x = this.game.level.getLevel()[0].length * TILESIZE - PLAYER_SIZE;
        if (this.y < 0)
            this.y = 0;
        if (this.y > this.game.level.getLevel().length * TILESIZE - PLAYER_SIZE)
            this.y = this.game.level.getLevel().length * TILESIZE - PLAYER_SIZE;
    };
    Player.prototype.render = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.drawImage(this.playerImage, this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map