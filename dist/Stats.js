class StatsManager {
    constructor() {
        this.hungry = 100;
        this.thirst = 100;
        this.cagar = 100;
        this.energy = 100;
        this.hungryDiv = document.getElementById("hungryDiv");
        this.thirstDiv = document.getElementById("thirstDiv");
        this.cagarDiv = document.getElementById("cagarDiv");
        this.energyDiv = document.getElementById("energyDiv");
        this.hungryDiv.style.width = `${this.hungry}%`;
    }
    hungryDecrease() {
        setInterval(() => {
            if (this.hungry > 0) {
                this.hungry--;
                this.hungryDiv.style.width = `${this.hungry}%`;
            }
        }, 2000);
    }
    thirstDecrease() {
        setInterval(() => {
            if (this.thirst > 0) {
                this.thirst--;
                this.thirstDiv.style.width = `${this.thirst}%`;
            }
        }, 2000);
    }
    cagarDecrease() {
        setInterval(() => {
            if (this.cagar > 0) {
                this.cagar--;
                this.cagarDiv.style.width = `${this.cagar}%`;
            }
        }, 10000);
    }
    energyDecrease() {
        this.energy -= 0.02;
        this.energyDiv.style.width = `${this.energy}%`;
    }
}
//# sourceMappingURL=Stats.js.map