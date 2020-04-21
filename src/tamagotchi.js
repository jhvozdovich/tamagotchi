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
  constructor (name) {
    this.name = name;
    this.inventory = [];
  }

  pickUpItem(item) {
    if(this.inventory.length < 6) {
      this.inventory.push(item);
    } else {
      return "Your bag is full!";
    }
  }

  useItem(item, tama){
    if (this.inventory.includes(item)){
      if (item.type === "food" && tama.hunger < 7 && item.snackStatus === true) {
        tama.hunger += item.value;
        tama.happiness += item.value;
      } 
      else if (item.type === "food" && tama.hunger < 7) {
        tama.hunger += item.value;
      } else if (item.type === "toy" && tama.happiness < 7) {
        // tama.happiness += item.value;
      } else if (tama.hunger >= 7) {
        // return `${tama.name} is full!`;
      } else if (tama.happiness >= 7) {
        // return `${tama.name} is tired!`;
      }
    } else {
      return "You don't have this item!";
    }  
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
