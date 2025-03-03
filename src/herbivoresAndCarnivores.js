'use strict';
class Animal {
  static alive = [];
  static id = 0;

  constructor(name, health = 100) {
    Animal.id++;
    this.id = Animal.id;
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    Animal.alive.findIndex((creature, i) => {
      if (target.id === creature.id && creature.hidden === false) {
        Animal.alive[i].health -= 50;

        if (Animal.alive[i].health <= 0) {
          Animal.alive.splice(i, 1);
        }

        return true;
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
