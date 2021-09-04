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

	public show(divClass: string) {
		this.div = document.createElement("DIV") as HTMLDivElement;
		this.div.classList.add(divClass);
		this.div.style.display = "inherit";
		this.div.innerHTML = `
			<p>${this.texts[this.currentText]}</p>
		`;
		this.div.appendChild(this.btn);
		document.getElementById('info').appendChild(this.div);

	}

	public next() {
		if (this.texts[this.currentText + 1]) {
			this.currentText++;
			// this.show(this.div.className);
			this.div.innerHTML = `
				<p>${this.texts[this.currentText]}</p>
			`;
			this.div.appendChild(this.btn);
		} else {
			this.div.style.display = "none";
		}
	}
}