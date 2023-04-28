class Scooter{
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = 1;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge < 20) {
      throw new Error("Scooter needs to charge.");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair.");
    } else {
      this.user = user;
      this.station = null;
      this.serial++
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
}


module.exports = Scooter
