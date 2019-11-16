class Centaur {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.standing = true;
        this.layingDown = false;
        this.cranky = false;
        this.crankyCounter = 0;
    }

    shoot() {
        this.crankyCounter++;
        if (!this.layingDown && this.crankyCounter < 3) {
            return('Twang!!!')
        } else {
            this.cranky = true;
            return('NO!')
        }

    }

    run() {
        this.crankyCounter++;
        if (this.crankyCounter < 3 && !this.layingDown) {
            return('Clop clop clop clop!!!')
        } else {
            this.cranky = true;
            return('NO!')
        }
    }

    sleep() {
        if (this.standing) {
            return('NO!')
        }
        if (this.layingDown) {
            this.crankyCounter = 0;
            this.cranky = false;
            return('ZZZZ')
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.layingDown) {
            return('Not while I\'m laying down!')
        } else if (this.cranky === false) {
            this.cranky = true;
        } else {
        this.cranky = false;
        this.crankyCounter = 0;
        }
    }
}

module.exports = Centaur;

