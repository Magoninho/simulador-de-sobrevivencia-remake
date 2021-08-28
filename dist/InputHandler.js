var InputHandler = /** @class */ (function () {
    function InputHandler(game) {
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'w':
                    game.player.dy = -1;
                    break;
                case 's':
                    // move down
                    game.player.dy = 1;
                    break;
                case 'a':
                    // move left
                    game.player.dx = -1;
                    break;
                case 'd':
                    // move right
                    game.player.dx = 1;
                    break;
            }
        });
        document.addEventListener('keyup', function (event) {
            switch (event.key) {
                case 'w':
                    game.player.dy = 0;
                    break;
                case 's':
                    game.player.dy = 0;
                    // move down
                    break;
                case 'a':
                    game.player.dx = 0;
                    // move left
                    break;
                case 'd':
                    game.player.dx = 0;
                    // move right
                    break;
            }
        });
    }
    return InputHandler;
}());
//# sourceMappingURL=InputHandler.js.map