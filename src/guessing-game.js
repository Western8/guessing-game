class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.res = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let res = this.min + Math.round((this.max - this.min) / 2);
        this.res = res;
        return res;
    }

    lower() {
        this.max = this.res;
    }

    greater() {
        this.min = this.res;
    }
}

module.exports = GuessingGame;
