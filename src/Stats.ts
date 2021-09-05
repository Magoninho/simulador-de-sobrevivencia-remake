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

	public update() {
		this.hungryDiv.style.width = `${this.hungry}%`;
		this.thirstDiv.style.width = `${this.thirst}%`;
		this.cagarDiv.style.width = `${this.cagar}%`;
		this.energyDiv.style.width = `${this.energy}%`;
	}

	hungryDecrease(): void {
		setInterval(() => {
			if (this.hungry > 0) {
				this.hungry--;
				this.update();
			}
		}, 2000);

	}
	thirstDecrease(): void {
		setInterval(() => {
			if (this.thirst > 0) {
				this.thirst--;
				this.update();
			}
		}, 2000);
	}
	cagarDecrease(): void {
		setInterval(() => {
			if (this.cagar > 0) {
				this.cagar--;
				this.update();
			}
		}, 10000);
	}
	energyDecrease(): void {
		this.energy -= 0.02;
		this.update();
	}


	public hungryIncrease(value: number) {
		if (this.hungry < 100)
			this.hungry += value;
	}
	public thirstIncrease(value: number) {
		if (this.thirst < 100)
			this.thirst += value;
	}
	public cagarIncrease(value: number) {
		if (this.cagar < 100)
			this.cagar += value;
	}
	public energyIncrease(value: number) {
		if (this.energy < 100)
			this.energy += value;
	}
}