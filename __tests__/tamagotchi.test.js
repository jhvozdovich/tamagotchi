import { Tama } from "./../src/tamagotchi";
import { Player } from "./../src/tamagotchi";
import { Item } from "./../src/tamagotchi";


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

  test('should test if a tomagotchi has died', () => {
    jest.advanceTimersByTime(18000001);
    jest.advanceTimersByTime(18000001);
    expect(jeff.alive).toEqual(false);
  });
});

describe('Player', () => {
  let bloop;
  beforeEach (() => {
    bloop = new Player ("Bloop");
  });
  test('should create a new character with a name and levels for hunger, happiness, health', () => {
    expect(bloop.name).toEqual("Bloop");
    expect(bloop.inventory).toEqual([]);
  });
});

describe('Item', () => {
  test('should create a new toy item with a name, type, and value', () => {
    let ball = new Item("Ball", "toy", 1);
    expect(ball.name).toEqual("Ball");
    expect(ball.type).toEqual("toy");
    expect(ball.value).toEqual(1);
  });
});

