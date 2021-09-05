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
        this.div = document.createElement("DIV");
    }
    show(divClass, type) {
        this.div.classList.add(divClass);
        this.div.style.display = "inherit";
        this.div.innerHTML = `
			<p>${this.texts[this.currentText]}</p>
		`;
        if (type == YES_NO) { // YES OR NO
            let yesBtn = document.createElement("BUTTON");
            let noBtn = document.createElement("BUTTON");
            yesBtn.innerHTML = "Sim";
            yesBtn.addEventListener("click", () => {
                this.onConfirm();
                this.next();
            });
            noBtn.innerHTML = "Não";
            noBtn.addEventListener("click", () => {
                this.next();
            });
            this.div.appendChild(yesBtn);
            this.div.appendChild(noBtn);
        }
        else {
            this.div.appendChild(this.btn);
        }
        document.getElementById('info').appendChild(this.div);
    }
    onConfirm() {
        alert("cool");
    }
    next() {
        if (this.texts[this.currentText + 1]) {
            this.currentText++;
            // this.show(this.div.className);
            this.div.innerHTML = `
				<p>${this.texts[this.currentText]}</p>
			`;
            this.div.appendChild(this.btn);
        }
        else {
            this.div.style.display = "none";
        }
    }
}
//# sourceMappingURL=Dialog.js.map