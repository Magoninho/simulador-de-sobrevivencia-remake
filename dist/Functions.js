function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(x2 - x1 + y2 - y1);
}
function hasTileAt(x, y, grid) {
    return grid[Math.floor(y / TILESIZE)][Math.floor(x / TILESIZE)];
}
//# sourceMappingURL=Functions.js.map