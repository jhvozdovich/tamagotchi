import { Tamo } from "./../src/tomagotchi";
import { Player } from "./../src/tomagotchi";


describe('Tamo', () => {
  jest.useFakeTimers();
  let jeff;

  beforeEach (() => {
    jeff = new Tamo("Jeff");
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
    // jest.advanceTimersByTime(36000001);
    expect(jeff.health).toEqual(8);
  });

  test('should test if a tomagotchi has died', () => {
    jest.advanceTimersByTime(18000001);
    console.log("HEALTH " + jeff.health);
    jest.advanceTimersByTime(18000001);
    console.log("HEALTH " + jeff.health);

    // jest.advanceTimersByTime(3600001);
    // jest.advanceTimersByTime(3600001);
    // jest.advanceTimersByTime(3600001);
    // jest.advanceTimersByTime(3600001);
    // jest.advanceTimersByTime(3600001);
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
