export class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  present() {
    return `Hej jeg hedder ${this.fname} ${this.lname}`;
  }
}

export class Age {
  constructor(birthYear) {
    this.birthYear = birthYear;
  }
  present() {
    return new Date().getFullYear() - this.birthYear;
  }
}

export class Card {
  constructor(fname, lname, mail, job) {
    this.fname = fname;
    this.lname = lname;
    this.mail = mail;
    this.job = job;
  }
  present() {
    return `${this.fname} ${this.lname} - ${this.mail} - ${this.job}`;
  }
}
