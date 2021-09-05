class AudioLoader {
	constructor() {

	}

	public loadAudio(audioSrc: string) {
		let audio = new Audio(audioSrc);
		return audio;
	}
}