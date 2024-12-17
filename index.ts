class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log("The dog barks");
  }
}

class Library {
  static totalBooks: number = 0;
  constructor() {
    Library.totalBooks++;
  }
  addBook() {
    Library.totalBooks++;
  }
}
const library1 = new Library();
const library2 = new Library();
library2.addBook();
console.log(Library.totalBooks);

class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const motocycle = new Motorcycle("BMW", "Z4", "moto");
const vehicle = new Vehicle("BMW", "X5");
console.log(motocycle);
console.log(vehicle);
