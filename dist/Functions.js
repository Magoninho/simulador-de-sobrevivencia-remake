function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(x2 - x1 + y2 - y1);
}
function getTileAt(x, y, grid) {
    return grid[Math.floor(y / TILESIZE)][Math.floor(x / TILESIZE)];
}
function clearDialogs() {
    for (let dialog = document.getElementsByClassName('dialogs').length - 1; dialog > 0; dialog--) {
        document.getElementById('info').removeChild(document.getElementsByClassName('dialogs')[dialog]);
    }
}
//# sourceMappingURL=Functions.js.map