class StatsManager {
	hungry: number;
	thirst: number;
	cagar: number;
	energy: number;

	hungryDiv: HTMLDivElement;
	thirstDiv: HTMLDivElement;
	cagarDiv: HTMLDivElement;
	energyDiv: HTMLDivElement;

	constructor() {
		this.hungry = 100;
		this.thirst = 100;
		this.cagar = 100;
		this.energy = 100;

		this.hungryDiv = document.getElementById("hungryDiv") as HTMLDivElement;
		this.thirstDiv = document.getElementById("thirstDiv") as HTMLDivElement;
		this.cagarDiv = document.getElementById("cagarDiv") as HTMLDivElement;
		this.energyDiv = document.getElementById("energyDiv") as HTMLDivElement;

		this.hungryDiv.style.width = `${this.hungry}%`;
	}

	hungryDecrease(): void {
		setInterval(() => {
			if (this.hungry > 0) {
				this.hungry--;
				this.hungryDiv.style.width = `${this.hungry}%`;
			}
			console.log(this.hungry);
		}, 2000);

	}
	thirstDecrease(): void {
		setInterval(() => {
			if (this.thirst > 0) {
				this.thirst--;
				this.thirstDiv.style.width = `${this.thirst}%`;
			}
		}, 2000);
	}
	cagarDecrease(): void {
		setInterval(() => {
			if (this.cagar > 0) {
				this.cagar--;
				this.cagarDiv.style.width = `${this.cagar}%`;
			}
		}, 10000);
	}
	energyDecrease(): void {
		this.energy -= 0.05;
		this.energyDiv.style.width = `${this.energy}%`;
	}
}