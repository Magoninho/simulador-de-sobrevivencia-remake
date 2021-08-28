var Dialog = /** @class */ (function () {
    function Dialog(texts, buttonText) {
        var _this = this;
        this.currentText = 0;
        this.texts = texts;
        this.buttonText = buttonText;
        this.btn = document.createElement("BUTTON");
        this.btn.innerHTML = this.buttonText;
        this.btn.addEventListener("click", function () {
            _this.next();
        });
    }
    Dialog.prototype.show = function (div) {
        this.div = div;
        this.div.style.display = "inherit";
        this.div.innerHTML = "\n\t\t\t<p>" + this.texts[this.currentText] + "</p>\n\t\t";
        this.div.appendChild(this.btn);
    };
    Dialog.prototype.next = function () {
        if (this.texts[this.currentText + 1]) {
            this.currentText++;
            this.show(this.div);
        }
        else {
            this.div.style.display = "none";
        }
    };
    return Dialog;
}());
//# sourceMappingURL=Dialog.js.map