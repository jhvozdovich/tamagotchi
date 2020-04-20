export class Tamo {
  constructor (name) {
    this.name = name;
    this.hunger = 5;
    this.happiness = 5;
    this.health = 10;
    this.alive = true;
  }

  decreaseHunger() {
    setInterval(() => {
      this.hunger--;
    }, 3600000);
  }

  decreaseHappiness() {
    setInterval (() => {
      this.happiness --;
    }, 3600000);
  }
  
  decreaseHealth() {
    if (this.hunger === 0 && this.happiness === 0) {
      setInterval (() => {
        this.health -= 2;
      }, 3600000);
    } else if (this.hunger === 0 || this.happiness === 0) {
      setInterval (() => {
        this.health -= 1;
      }, 3600000);
    }
  }
}

export class Player {
  constructor (name, inventory) {
    this.name = name;
    this.inventory = inventory || [];
  }
}

// export class LifeCycle {
//   constructor (egg, toddler, tween, teen, adult) {
//     this.egg = egg;
//     this.toddler = toddler;
//     this.tween = tween;
//     this.teen = teen;
//     this.adult = adult;
//   }
// }
