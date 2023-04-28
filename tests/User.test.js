const User = require("../src/User")

const x = new User("username", "password", 20);

describe("User object", () => {
  test("sets the correct username", () => {
    expect(x.username).toEqual("username");
  });

  test("sets the correct password", () => {
    expect(x.password).toEqual("password");
  });

  test("sets the correct age", () => {
    expect(x.age).toEqual(20);
  });

  test("logs the user in", () => {
    expect(x.loggedIn).toBe(false);
    x.login("password");
    expect(x.loggedIn).toBe(true);
  });

  test("logs the user out", () => {
    expect(x.loggedIn).toBe(true);
    x.logout();
    expect(x.loggedIn).toBe(false);
  });
});
