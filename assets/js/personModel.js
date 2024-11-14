export class Person {
  constructor(fname, lname, birthYear, mail, job) {
    this.fname = fname;
    this.lname = lname;    
    this.birthYear = birthYear;    
    this.mail = mail;
    this.job = job;
  }
  presentGreeting() {
    return `Hej jeg hedder ${this.fname} ${this.lname}`;
  }  
  presentAge() {
    return new Date().getFullYear() - this.birthYear;
  }  
  presentCard() {
    return `${this.fname} ${this.lname} - ${this.mail} - ${this.job}`;
  }
}