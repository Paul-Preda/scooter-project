const User = require("./User")
const Scooter = require("./Scooter")

class ScooterApp {
  constructor() {
    this.stations = {
      "Station A": [],
      "Station B": [],
      "Station C": [],
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("Username already registered.");
    }
    if (age < 18) {
      throw new Error("User must be 18 or older to register.");
    }
    this.registeredUsers[username] = {
      username : username,
      password: password,
      age: age,
      loggedIn: false
    };
    console.log("User has been registered.");
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
      throw new Error("Username or password is incorrect.");
    } else {
      user.loggedIn = true;
      console.log("User has been logged in.");
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("No user is logged in.");
    } else {
      user.loggedIn = false;
      console.log("User has been logged out."); 
    }
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No station exists with that name.");
    } else {
      const scooter = {
        station: station,
        user: null,
        serial: 1,
        charge: 100,
        isBroken: false
      };
      this.stations[station].push(scooter);
      console.log("Created new scooter.");
      return scooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station exists.");
    } else if (scooter.station === station) {
      throw new Error("Scooter is already at station.");
    } else {
      scooter.station = station;
      scooter.user = null;
      console.log("Scooter has been docked.");
    }
  }

  rentScooter(scooter, user) {
    for (const station of Object.values(this.stations)) {
      if (station.includes(scooter)) {
        if (scooter.user) {
          throw new Error("Scooter is already rented to a user.");
        } else {
          scooter.user = user;
          const index = station.indexOf(scooter);
          station.splice(index, 1);
          console.log("Scooter has been rented.");
          return;
        }
      }
    }
    throw new Error("Scooter not found at any station.");
  }

  print() {
    console.log("Registered users:");
    for (const username in this.registeredUsers) {
      console.log(`${username}, Age: ${this.registeredUsers[username].age}`);
    }
    console.log("Stations:");
    for (const station in this.stations) {
      console.log(`${station}, Scooters: ${this.stations[station].length}`);
    }
  }
}

module.exports = ScooterApp;
