export class Tamo {
  constructor (name) {
    // this.name = name;
    // this.hunger = 5;
    // this.happiness = 5;
    // this.health = 10;
  }
}

export class Player {
  constructor (name, inventory) {
    // this.name = name;
    // this.inventory = inventory || [];

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



export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
}