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
		this.div = document.createElement("DIV") as HTMLDivElement;
	}

	public show(divClass: string, type?: number) {
		this.div.classList.add(divClass);
		this.div.style.display = "inherit";
		this.div.innerHTML = `
			<p>${this.texts[this.currentText]}</p>
		`;
		if (type == YES_NO) { // YES OR NO
			let yesBtn: HTMLButtonElement = document.createElement("BUTTON") as HTMLButtonElement;
			let noBtn:  HTMLButtonElement = document.createElement("BUTTON") as HTMLButtonElement;

			yesBtn.innerHTML = "Sim";
			yesBtn.addEventListener("click", () => {
				this.onConfirm();
				this.next();
			});

			noBtn.innerHTML  = "Não";
			noBtn.addEventListener("click", () => {
				this.next();
			});
			
			this.div.appendChild(yesBtn);
			this.div.appendChild(noBtn);


		} else {
			this.div.appendChild(this.btn);
		}
		document.getElementById('info').appendChild(this.div);

		

	}

	public onConfirm() {
		alert("cool");
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