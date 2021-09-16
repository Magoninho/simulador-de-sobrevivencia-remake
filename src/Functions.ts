function getDistance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt(x2 - x1 + y2 - y1);
}

function getTileAt(x: number, y: number, grid: number[][]): number {
	return grid[Math.floor(y / TILESIZE)][Math.floor(x / TILESIZE)];
}

function clearDialogs(): void {
	for (let dialog = document.getElementsByClassName('dialogs').length-1; dialog > 0; dialog--) {
		document.getElementById('info').removeChild(document.getElementsByClassName('dialogs')[dialog]);
	}
}