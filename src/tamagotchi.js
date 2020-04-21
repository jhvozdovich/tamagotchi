export class Tama {
  constructor (name) {
    this.name = name;
    this.hunger = 5;
    this.happiness = 5;
    this.health = 10;
    this.alive = true;
  }

  decreaseHunger() {
    setInterval(() => {
      if (this.hunger !== 0) {
        this.hunger--;
      }
    }, 3600000);
  }

  decreaseHappiness() {
    setInterval (() => {
      if (this.happiness !== 0) {
        this.happiness --;
      }
    }, 3600000);
  } 
  
  decreaseHealth() {
    setInterval (() => { 
      if (this.health <= 0) {
        this.alive = false;
      } else if (this.hunger === 0 && this.happiness === 0) {
        this.health -= 2;
      } else if (this.hunger === 0 || this.happiness === 0) {
        this.health -= 1;
      } 
    }, 3600000);
  }
}

export class Player {
  constructor (name, inventory) {
    this.name = name;
    this.inventory = inventory || [];
  }

  pickUpItem(item) {
  //   if(this.inventory.length < 6) {
  //     this.inventory.push(item);
  //   } else {
  //     return "Your bag is full!";
  //   }
  }
}

export class Item {
  constructor (name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

export class Food extends Item {
  constructor (name, type, value, snackStatus) {
    super(name, type, value);
    this.snackStatus = snackStatus;
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
