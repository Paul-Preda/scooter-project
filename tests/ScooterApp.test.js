const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

describe("ScooterApp", () => {
  let app;

  beforeEach(() => {
    app = new ScooterApp();
  });

  describe("registerUser", () => {
    test("registers a new user", () => {
      const user = app.registerUser("user", "password", 21);
      expect(user).toEqual({
        username: "user",
        password: "password",
        age: 21,
        loggedIn: false,
      });
    });

    test("throws an error if username is already registered", () => {
      app.registerUser("user", "password", 21);
      expect(() => {
        app.registerUser("user", "password2", 22);
      }).toThrow("Username already registered.");
    });

    test("throws an error if age is less than 18", () => {
      expect(() => {
        app.registerUser("user", "password", 17);
      }).toThrow("User must be 18 or older to register.");
    });
  });

  describe("loginUser", () => {
    test("logs in a user with correct credentials", () => {
      app.registerUser("user", "password", 21);
      app.loginUser("user", "password");
      const user = app.registeredUsers["user"];
      expect(user.loggedIn).toBe(true);
    });

    test("throws an error with incorrect username", () => {
      app.registerUser("user", "password", 21);
      expect(() => {
        app.loginUser("wronguser", "password");
      }).toThrow("Username or password is incorrect.");
    });

    test("throws an error with incorrect password", () => {
      app.registerUser("user", "password", 21);
      expect(() => {
        app.loginUser("user", "wrongpassword");
      }).toThrow("Username or password is incorrect.");
    });
  });

  describe("logoutUser", () => {
    test("logs out a user", () => {
      app.registerUser("user", "password", 21);
      app.loginUser("user", "password");
      app.logoutUser("user");
      const user = app.registeredUsers["user"];
      expect(user.loggedIn).toBe(false);
    });

  });
});

// login check

// rent scooter

// dock scooter
