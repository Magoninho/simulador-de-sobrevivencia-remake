class Dialog {
	texts: string[];
	buttonText: string;
	div: HTMLDivElement;
	btn: HTMLButtonElement;
	currentText: number;

	constructor(texts: string[], buttonText?: string) {
		this.currentText = 0;
		this.texts = texts;
		this.buttonText = buttonText;
		this.btn = document.createElement("BUTTON") as HTMLButtonElement;
		this.btn.innerHTML = this.buttonText;
		this.btn.addEventListener("click", () => {
			this.next();
		});
	}

	public show(div: HTMLDivElement) {
		this.div = div;
		this.div.style.display = "inherit";
		this.div.innerHTML = `
			<p>${this.texts[this.currentText]}</p>
		`;
		this.div.appendChild(this.btn);

	}

	public next() {
		if (this.texts[this.currentText + 1]) {
			this.currentText++;
			this.show(this.div);
		} else {
			this.div.style.display = "none";
		}
	}
}