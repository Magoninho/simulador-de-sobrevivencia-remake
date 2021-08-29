var openSimplex = openSimplexNoise(Date.now());
var zoom = 8;
function generateMap(width, height) {
    var map = [];
    for (var y = 0; y < height; y++) {
        map.push([]);
        for (var x = 0; x < width; x++) {
            map[y].push(Math.round(openSimplex.noise2D(x / zoom, y / zoom) + 2));
        }
    }
    console.log(map);
    return map;
}
//# sourceMappingURL=Map.js.map