class Sphinx {
    constructor() {
        this.riddles = [];
        this.heroesEaten = 0;
    }

    collectRiddle(riddle) {
        this.riddles.push(riddle);
        if (this.riddles.length === 4) {
            this.riddles.shift();
        }
    }

    attemptAnswer(guess) {
        let correctRiddle = this.riddles.find(riddle => riddle.answer === guess);
        if (correctRiddle) {
            this.removeRiddle(correctRiddle);
            if (this.riddles.length === 0) {
                return (`PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`)
            } else {
                return ('That wasn\'t that hard, I bet you don\'t get the next one');
            }
        } else {
            this.heroesEaten++;
        }
    }

    removeRiddle(correctRiddle) {
        var index = this.riddles.indexOf(correctRiddle);
        if (index > -1) {
            this.riddles.splice(index, 1);
        }
    }
}

module.exports = Sphinx;