class User {
  constructor(username, password, age, loggedIn) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      console.log("Successfully logged in.");
    } else {
      throw new Error("Incorrect password.");
    }
  }

  logout() {
    this.loggedIn = false;
    console.log("Successfully logged out.");
  }
}


module.exports = User
