var GraphicsLoader = /** @class */ (function () {
    function GraphicsLoader() {
    }
    GraphicsLoader.prototype.loadGraphics = function (imageSource) {
        var image = new Image(100, 100);
        image.src = imageSource;
        return image;
    };
    return GraphicsLoader;
}());
//# sourceMappingURL=GraphicsLoader.js.map