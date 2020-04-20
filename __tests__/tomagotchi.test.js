import { Tamo } from "./../src/tomagotchi";
import { Player } from "./../src/tomagotchi";


describe('Tamo', () => {
  jest.useFakeTimers();
  let jeff;

  beforeEach (() => {
    jeff = new Tamo("Jeff");
    jeff.decreaseHunger();
    jeff.decreaseHappiness();
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

  // decreaseHunger fail
  test('should test hunger lvls are decreasing', () => {
    jest.advanceTimersByTime(60001);
    expect(jeff.hunger).toEqual(4);
  });

  // decreaseHappiness
  test('should test happiness lvls are decreasing', () => {
    jest.advanceTimersByTime(60001);
    expect(jeff.happiness).toEqual(5);
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
