class PopUp {
	texts: string[];
	popUpDiv: HTMLDivElement;
	btn: HTMLButtonElement;
	constructor() {
		this.popUpDiv = document.getElementsByClassName('popup')[0] as HTMLDivElement;
		this.popUpDiv.style.display = 'initial';
		// document.getElementById('popup_audio').play();

		this.btn = document.getElementById('popup_button') as HTMLButtonElement;
	}

	public popUp(text: string, f?: () => void) {
		let popup_text: HTMLParagraphElement = document.getElementById('popup_text') as HTMLParagraphElement;
		popup_text.innerHTML = text;

		this.btn.addEventListener('click', () => {
			this.popUpDiv.style.display = 'none';

			if (f)
				f();
		});

	}

}
//Você está preso na ilha. Colete madeiras pra construir uma canoa. Não fique exausto. Mantenha-se sempre hidratado. Cague.