// learnings about classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  birthday() {
    this.age += 1;
    console.log("happy birthday", this.name, "you are now", this.age);
  }

  greeting() {
    console.log("hi my name is", this.name);
  }
}

class Genius extends Person {
  constructor(name, age, iq) {
    super(name, age);
    this.iq = iq;
  }

  study() {
    this.iq += 1;
    console.log("I've done some studying and damn I'm smart", this.iq);
  }
}

const jim = new Person("Jim", 32);
const jimmy = new Genius("Jimmy", 33, 100);
jim.birthday();
jim.greeting();
jimmy.study();
