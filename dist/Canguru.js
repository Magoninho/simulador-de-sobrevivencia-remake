class Canguru extends Mob {
    constructor(x, y, width, height, image) {
        super(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new GraphicsLoader().loadGraphics('../images/canguru.png');
    }
}
//# sourceMappingURL=Canguru.js.map