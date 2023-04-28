const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("Scooter object", () => {
  test("creates a Scooter with default values", () => {
    const scooter = new Scooter("Camden");
    expect(scooter.station).toEqual("Camden");
    expect(scooter.user).toBeNull();
    expect(scooter.serial).toEqual(1);
    expect(scooter.charge).toEqual(100);
    expect(scooter.isBroken).toBe(false);
  });

  test("rents a scooter", () => {
    const scooter = new Scooter("Camden");
    const user = new User("name", "email");
    scooter.rent(user);
    expect(scooter.user).toEqual(user);
  });

  test("throw an error when renting a scooter with => 20% charge", () => {
    const scooter = new Scooter("Camden");
    const user = new User("name", "email");
    scooter.charge = 19;
    expect(() => {
      scooter.rent(user);
    }).toThrow("Scooter needs to charge.");
  });

  test("throw an error when renting a broken scooter", () => {
    const scooter = new Scooter("Camden");
    const user = new User("name", "email");
    scooter.isBroken = true;
    expect(() => {
      scooter.rent(user);
    }).toThrow("Scooter needs repair.");
  });

  test("dock a scooter at a station", () => {
    const scooter = new Scooter("Camden");
    const user = new User("name", "email");
    scooter.rent(user);
    scooter.dock("new station");
    expect(scooter.station).toEqual("new station");
    expect(scooter.user).toBeNull();
  });
});
