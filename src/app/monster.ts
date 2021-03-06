import {Creature} from './creature';

export class Monster extends Creature {
    gold: number;
    constructor(name, damage, maxHealth, gold) {
        super(name, damage, maxHealth);
        this.gold = gold;
    }
    attack(bonus = 0): number {
        return super.attack(bonus);
    };

    heal(hp) {
        super.heal(hp);
    };
}
