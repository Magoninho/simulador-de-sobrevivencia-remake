let seed = Date.now();
const openSimplex = openSimplexNoise(seed);
console.log(seed);

const zoom = 8;

function generateMap(width: number, height: number): number[][] {
	let map = [];

	for (let y = 0; y < height; y++) {
		map.push([]);
		for (let x = 0; x < width; x++) {
			map[y].push(Math.round(openSimplex.noise2D(x / zoom, y / zoom) + 2));
		}
	}
	console.log(map);
	return map;
}