import { Tama } from "./../src/tamagotchi";
import { Player } from "./../src/tamagotchi";
import { Item } from "./../src/tamagotchi";
import { Food } from "./../src/tamagotchi";


describe('Tama', () => {
  jest.useFakeTimers();
  let jeff;

  beforeEach (() => {
    jeff = new Tama("Jeff");
    jeff.decreaseHunger();
    jeff.decreaseHappiness();
    jeff.decreaseHealth();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
  
  test('should create a new character with a name and levels for hunger, happiness, health', () => {
    expect(jeff.name).toEqual("Jeff");
    expect(jeff.hunger).toEqual(5);
    expect(jeff.happiness).toEqual(5);
    expect(jeff.health).toEqual(10);
    expect(jeff.alive).toEqual(true);
  });

  test('should test hunger lvls are decreasing (decrease 1 per hour)', () => {
    jest.advanceTimersByTime(3600001);
    expect(jeff.hunger).toEqual(4);
  });

  test('should test happiness lvls are decreasing (decrease 1 per hour)', () => {
    jest.advanceTimersByTime(3600001);
    expect(jeff.happiness).toEqual(4);
  });

  test('should test if health levels are decreasing', () => {
    jest.advanceTimersByTime(18000001);
    expect(jeff.health).toEqual(8);
  });

  test('should test if health decreases by 1 if one stat (happiness) is not at 0', () => {
    let bloop = new Player ("Bloop");
    let gameboy = new Item("GameBoy", "toy", 2);
    bloop.pickUpItem(gameboy);
    jest.advanceTimersByTime(10800000);
    bloop.useItem(gameboy, jeff);
    jest.advanceTimersByTime(7200001);
    expect(jeff.health).toEqual(9);
  });

  test('should test if health decraeses by 1 if one stat (hunger) is not at 0', () => {
    let bloop = new Player ("Bloop");
    let roast = new Food("Roast", "food", 2, false);
    bloop.pickUpItem(roast);
    jest.advanceTimersByTime(10800000);
    bloop.useItem(roast, jeff);
    jest.advanceTimersByTime(7200001);
    expect(jeff.health).toEqual(9);
  });

  test('should test if a tomagotchi has died', () => {
    jest.advanceTimersByTime(18000001);
    jest.advanceTimersByTime(18000001);
    expect(jeff.alive).toEqual(false);
  });
});

describe('Player', () => {
  let bloop;
  let jeff;
  beforeEach (() => {
    bloop = new Player ("Bloop");
    jeff = new Tama("Jeff");
  });

  test('should create a new character with a name and levels for hunger, happiness, health', () => {
    expect(bloop.name).toEqual("Bloop");
    expect(bloop.inventory).toEqual([]);
  });

  test('should add an item to Player inventory', () => {
    let ball = new Item("Ball", "toy", 1);
    bloop.pickUpItem(ball);
    expect(bloop.inventory).toEqual([ball]);
  });

  test("should let a player use a snack food item on a tama", () => {
    let chocolate = new Food("Chocolate", "food", 1, true);
    bloop.pickUpItem(chocolate);
    bloop.useItem(chocolate, jeff);
    expect(jeff.hunger).toEqual(6);
    expect(jeff.happiness).toEqual(6);
  });

  test("should let a player use a food item on a tama", () => {
    let carrot = new Food("Carrot", "food", 1, false);
    bloop.pickUpItem(carrot);
    bloop.useItem(carrot, jeff);
    expect(jeff.hunger).toEqual(6);
  });

  test("should let a player use a toy item on a tama", () => {
    let ball = new Item("Ball", "toy", 1);
    bloop.pickUpItem(ball);
    bloop.useItem(ball, jeff);
    expect(jeff.happiness).toEqual(6);
  });
  
  test("should return an error if player attempts to feed the tama when it is full", () => {
    let roast = new Food("Roast", "food", 2, false);
    let carrot = new Food("Carrot", "food", 1, false);
    bloop.pickUpItem(roast);
    bloop.pickUpItem(carrot);
    bloop.useItem(roast, jeff);
    expect(bloop.useItem(carrot, jeff)).toEqual("Jeff is full!");
  });

  test("should return an error if player attempts to feed the tama when it is tired", () => {
    let gameboy = new Item("GameBoy", "toy", 2);
    let ball = new Item("Ball", "toy", 1);
    bloop.pickUpItem(gameboy);
    bloop.pickUpItem(ball);
    bloop.useItem(gameboy, jeff);
    expect(bloop.useItem(ball, jeff)).toEqual("Jeff is tired!");
  });

  test("should return an error if player attempts to use an item they don't have", () => {
    let ball = new Item("Ball", "toy", 1);
    expect(bloop.useItem(ball, jeff)).toEqual("You don't have this item!");
  });

  test("should return bag is full", () => {
    let ball = new Item("Ball", "toy", 1);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(ball);
    expect(bloop.pickUpItem(ball)).toEqual("Your bag is full!");
    bloop.pickUpItem(ball);
    expect(bloop.inventory.length).toEqual(6);
  });

  test("should remove an item in the inventory", () => {
    let ball = new Item("Ball", "toy", 1);
    let chocolate = new Food("Chocolate", "food", 1, true);
    let carrot = new Food("Carrot", "food", 1, false);
    bloop.pickUpItem(ball);
    bloop.pickUpItem(chocolate);
    bloop.pickUpItem(carrot);
    expect(bloop.removeItem(chocolate)).toEqual([ball, carrot]);
    bloop.pickUpItem(chocolate);
    expect(bloop.removeItem(carrot)).toEqual([ball, chocolate]);
    bloop.pickUpItem(carrot);
    expect(bloop.removeItem(ball)).toEqual([chocolate, carrot]);
  });

  test("should let a player use a snack food item on a tama and remove it from the inventory", () => {
    let chocolate = new Food("Chocolate", "food", 1, true);
    bloop.pickUpItem(chocolate);
    bloop.useItem(chocolate, jeff);
    expect(bloop.inventory).toEqual([]);
  });

  // test("should let a player use a food item on a tama", () => {
  //   let carrot = new Food("Carrot", "food", 1, false);
  //   let chocolate = new Food("Chocolate", "food", 1, true);
  //   bloop.pickUpItem(chocolate);
  //   bloop.pickUpItem(carrot);
  //   bloop.useItem(carrot, jeff);
  //   expect(jeff.inventory).toEqual([chocolate]);
  // });

});

describe('Item', () => {
  test('should create a new toy item with a name, type, and value', () => {
    let ball = new Item("Ball", "toy", 1);
    expect(ball.name).toEqual("Ball");
    expect(ball.type).toEqual("toy");
    expect(ball.value).toEqual(1);
  });
});

describe('Food', () => {
  test('should create a new food item with a name, type, and value', () => {
    let carrot = new Food("Carrot", "food", 1, false);
    expect(carrot.name).toEqual("Carrot");
    expect(carrot.type).toEqual("food");
    expect(carrot.value).toEqual(1);
    expect(carrot.snackStatus).toEqual(false);
  });

  test('should create a new snack food item with a name, type, and value', () => {
    let chocolate = new Food("Chocolate", "food", 1, true);
    expect(chocolate.name).toEqual("Chocolate");
    expect(chocolate.type).toEqual("food");
    expect(chocolate.value).toEqual(1);
    expect(chocolate.snackStatus).toEqual(true);
  });
});

