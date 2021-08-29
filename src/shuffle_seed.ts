
// This is free and unencumbered software released into the public domain
function shuffleSeed(seed: Uint32Array): Uint32Array {
	const newSeed = new Uint32Array(1);
	newSeed[0] = seed[0] * 1664525 + 1013904223;
	return newSeed;
  }