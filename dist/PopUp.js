class PopUp {
    constructor() {
        this.popUpDiv = document.getElementsByClassName('popup')[0];
        this.popUpDiv.style.display = 'initial';
        // document.getElementById('popup_audio').play();
        this.btn = document.getElementById('popup_button');
    }
    popUp(text, f) {
        let popup_text = document.getElementById('popup_text');
        popup_text.innerHTML = text;
        this.btn.addEventListener('click', () => {
            this.popUpDiv.style.display = 'none';
            if (f)
                f();
        });
    }
}
//Você está preso na ilha. Colete madeiras pra construir uma canoa. Não fique exausto. Mantenha-se sempre hidratado. Cague.
//# sourceMappingURL=PopUp.js.map