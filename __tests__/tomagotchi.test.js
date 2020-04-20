import { Tamo } from "./../src/tomagotchi";
import { Player } from "./../src/tomagotchi";


describe('Tamo', () => {
  let jeff;
  beforeEach (() => {
    jeff = new Tamo("Jeff");
  });
  test('should create a new character with a name and levels for hunger, happiness, health', () => {
    expect(jeff.name).toEqual("Jeff");
    expect(jeff.hunger).toEqual(5);
    expect(jeff.happiness).toEqual(5);
    expect(jeff.health).toEqual(10);
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
