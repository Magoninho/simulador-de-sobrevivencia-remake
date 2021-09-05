class Mob {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    update() {
    }
    render(ctx) {
        if (this.image != undefined) {
            ctx.drawImage(this.image, this.x, this.y, this.width + 1, this.height + 1);
        }
        else {
            ctx.fillStyle = "purple";
            ctx.fillRect(this.x, this.y, this.width + 1, this.height + 1);
        }
    }
    onCollisionEnter() {
        this.dialog = new Dialog(["voce encostou num mob qualquer"], "ok");
        this.dialog.show("dialogs");
    }
}
//# sourceMappingURL=Mob.js.map