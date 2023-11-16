// const rogue = {
//   color: "white",
//   drive: false,

//   run() {
//     console.log("Driving my new Rogue!");
//   },
// };

// rogue.color;
// rogue.run;

// class Dog {
//   constructor(color, gender, breed) {
//     (this.color = color), (this.gender = gender), (this.breed = breed);
//   }
//   bark() {
//     console.log(`The ${this.color} dog barked!`); //template literal ( use button next to the number one)
//   }
// }

// class Cat extends Dog {
//   // inherited classes-joined with dog
//   constructor(color, gender, breed) {
//     super(color, gender, breed);
//   }
//   meow() {
//     console.log(`The ${this.color} cat meowed!`);
//   }
// }

// const dog1 = new Dog("black", "male", "shepard");
// const dog2 = new Dog("white", "female", "poodle");
// const cat1 = new Cat("brown", "male", "tiger");
// dog1.bark();
// cat1.meow();
// console.log(dog1.color);
// console.log(dog2.gender);
// console.log(cat1.breed);

class Car {
  constructor(color, make, model) {
    (this.color = color), (this.make = make), (this.model = model);
  }
  drove() {
    console.log(`I drove a new ${this.color} ${this.make}!`);
  }
}

class Motorcycle extends Car {
  constructor(color, make, model) {
    super(color, make, model);
  }
  rode() {
    console.log(`I rode a ${this.color} ${this.make} and it was a rush!`);
  }
}

const car1 = new Car("white", "Nissan", "Rogue");
const car2 = new Car("red", "Ford", "Mustang");
const mot1 = new Motorcycle = ("blue", "Harley", "350");
const mot2 = new Motorcycle("black", "Honda", XE);
car1.drove();
car2.drove();
motorcycle1.rode();
motorcycle2.rode();
console.log(car1.color);
console.log(car2.make);
console.log(mot1.make);
