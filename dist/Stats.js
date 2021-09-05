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
    update() {
        this.hungryDiv.style.width = `${this.hungry}%`;
        this.thirstDiv.style.width = `${this.thirst}%`;
        this.cagarDiv.style.width = `${this.cagar}%`;
        this.energyDiv.style.width = `${this.energy}%`;
    }
    hungryDecrease() {
        setInterval(() => {
            if (this.hungry > 0) {
                this.hungry--;
                this.update();
            }
        }, 2000);
    }
    thirstDecrease() {
        setInterval(() => {
            if (this.thirst > 0) {
                this.thirst--;
                this.update();
            }
        }, 2000);
    }
    cagarDecrease() {
        setInterval(() => {
            if (this.cagar > 0) {
                this.cagar--;
                this.update();
            }
        }, 10000);
    }
    energyDecrease() {
        this.energy -= 0.02;
        this.update();
    }
    hungryIncrease(value) {
        if (this.hungry < 100)
            this.hungry += value;
    }
    thirstIncrease(value) {
        if (this.thirst < 100)
            this.thirst += value;
    }
    cagarIncrease(value) {
        if (this.cagar < 100)
            this.cagar += value;
    }
    energyIncrease(value) {
        if (this.energy < 100)
            this.energy += value;
    }
}
//# sourceMappingURL=Stats.js.map