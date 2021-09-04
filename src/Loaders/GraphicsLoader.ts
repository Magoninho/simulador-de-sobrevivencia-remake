class GraphicsLoader {

	constructor() {

	}

	public loadGraphics(imageSource: string) {
		let image: HTMLImageElement = new Image();
		image.src = imageSource;

		return image;
	}
}