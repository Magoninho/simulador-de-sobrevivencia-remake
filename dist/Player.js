class Player {
    constructor(game, x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.game = game;
        this.playerImage = new Image(PLAYER_SIZE, PLAYER_SIZE);
        this.playerImage.src = "../images/profile.png";
        this.isMoving = false;
        // this will make sure that the player won't spawn suffocated in a block
        while (getTileAt(this.x, this.y, LEVEL_1) == 1) {
            // todo: change this later
            this.x = Math.floor(Math.random() * WORLD_WIDTH / 2) + 200;
            this.y = Math.floor(Math.random() * WORLD_HEIGHT / 2) + 200;
        }
        console.log("achou uma posição boa na " + this.x + " " + this.y);
    }
    /**
    *
    * @param {number} dx - x direction (-1, 0, 1)
    * @param {number} dy - y direction (-1, 0, 1)
    *
    */
    move(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
    stop() {
        this.dx = 0;
        this.dy = 0;
    }
    // TODO: fazer um array com walls e um loop pra testar colisão com cada um dentro dessa função
    // TODO: renomear para isCollidingWithWalls pra fazer sentido essa alteração
    isColliding(dx, dy) {
        for (let index = 0; index < game.mobList.length; index++) {
            // if (game.mobList[index]) {
            if (this.x + (dx * 10) < game.mobList[index].x + game.mobList[index].width &&
                this.x + (dx * 10) + PLAYER_SIZE > game.mobList[index].x &&
                this.y + (dy * 10) < game.mobList[index].y + game.mobList[index].height &&
                this.y + (dy * 10) + PLAYER_SIZE > game.mobList[index].y) {
                game.mobList[index].onCollisionEnter();
                return true;
                // }
            }
        }
        return false;
    }
    update(deltaTime) {
        if (this.isMoving)
            statsManager.energyDecrease();
        if (!this.isColliding(this.dx, this.dy)) {
            this.vx = this.dx * PLAYER_SPEED * deltaTime;
            this.vy = this.dy * PLAYER_SPEED * deltaTime;
            if (this.dx != 0 && this.dy != 0) {
                this.vx /= 1.414;
                this.vy /= 1.414;
            }
            this.x += this.vx;
            this.y += this.vy;
        }
        else {
            // new Dialog([`${}`], "ok").show(dialogDiv);
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
    }
    render(ctx) {
        ctx.drawImage(this.playerImage, this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}
//# sourceMappingURL=Player.js.map