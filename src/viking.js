// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }

    vikingAttack() {
        if(this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
            return 'Both armies need soldiers to battle';
        }
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        const battleFeedback = saxon.receiveDamage(viking.strength);

        if(saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return battleFeedback;
    }


    saxonAttack() {
        if(this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
            return 'Both armies need soldiers to battle';
        }
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        const battleFeedback = viking.receiveDamage(saxon.strength);

        if(viking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return battleFeedback;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }

        if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }

        if(this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }

}

const war = new War();

const viking = new Viking('Asterics', 50, 30);

const saxon = new Saxon(100, 0);

war.addSaxon(saxon);

war.addViking(viking);

console.log(war.saxonArmy, war.vikingArmy);
