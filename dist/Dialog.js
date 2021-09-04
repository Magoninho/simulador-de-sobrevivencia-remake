class Dialog {
    constructor(texts, buttonText) {
        this.currentText = 0;
        this.texts = texts;
        this.buttonText = buttonText;
        this.btn = document.createElement("BUTTON");
        this.btn.innerHTML = this.buttonText;
        this.btn.addEventListener("click", () => {
            this.next();
        });
    }
    show(div) {
        this.div = div;
        this.div.style.display = "inherit";
        this.div.innerHTML = `
			<p>${this.texts[this.currentText]}</p>
		`;
        this.div.appendChild(this.btn);
    }
    next() {
        if (this.texts[this.currentText + 1]) {
            this.currentText++;
            this.show(this.div);
        }
        else {
            this.div.style.display = "none";
        }
    }
}
//# sourceMappingURL=Dialog.js.map