export class Tamo {
  constructor (name) {
    this.name = name;
    this.hunger = 5;
    this.happiness = 5;
    this.health = 10;
    this.alive = true;
    // this.healthInterval = setInterval(this.decreaseHealth, 360000);
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
    if (this.health <= 0) {
      this.alive = false;
      return this.alive;
    } else if (this.hunger === 0 && this.happiness === 0) {
      setTimeout(() => { 
        this.health -= 2;
        this.decreaseHealth();
      }, 3600000);
      
    } else if (this.hunger === 0 || this.happiness === 0) {
      setTimeout(() => {
        this.health -= 1;
        this.decreaseHealth();
      },  3600000);
    } 
    // else {
    //   setInterval(() => {
    //     this.decreaseHealth();
    //   }, 3600000);
    // }
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
