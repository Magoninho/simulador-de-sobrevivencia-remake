class GameObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
    }
    render(ctx) {
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getPosition() {
        return [this.x, this.y];
    }
}
//# sourceMappingURL=GameObject.js.map