var StatsManager = /** @class */ (function () {
    function StatsManager() {
        this.hungry = 100;
        this.thirst = 100;
        this.cagar = 100;
        this.energy = 100;
        this.hungryDiv = document.getElementById("hungryDiv");
        this.thirstDiv = document.getElementById("thirstDiv");
        this.cagarDiv = document.getElementById("cagarDiv");
        this.energyDiv = document.getElementById("energyDiv");
        this.hungryDiv.style.width = this.hungry + "%";
    }
    StatsManager.prototype.hungryDecrease = function () {
        var _this = this;
        setInterval(function () {
            if (_this.hungry > 0) {
                _this.hungry--;
                _this.hungryDiv.style.width = _this.hungry + "%";
            }
            console.log(_this.hungry);
        }, 2000);
    };
    StatsManager.prototype.thirstDecrease = function () {
        var _this = this;
        setInterval(function () {
            if (_this.thirst > 0) {
                _this.thirst--;
                _this.thirstDiv.style.width = _this.thirst + "%";
            }
        }, 2000);
    };
    StatsManager.prototype.cagarDecrease = function () {
        var _this = this;
        setInterval(function () {
            if (_this.cagar > 0) {
                _this.cagar--;
                _this.cagarDiv.style.width = _this.cagar + "%";
            }
        }, 10000);
    };
    StatsManager.prototype.energyDecrease = function () {
        this.energy -= 0.02;
        this.energyDiv.style.width = this.energy + "%";
    };
    return StatsManager;
}());
//# sourceMappingURL=Stats.js.map