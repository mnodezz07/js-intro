// //factory function to create student objects
// function createStudent(name, age, address) {
//   return {
//     name: name,
//     age: age,
//     address: address,
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };
// }
// const alice = createStudent("Alice", 22, "123 Main St");
// const john = createStudent("John", 20, "456 Oak Ave");
// alice.greet();
// john.greet();

// //constructor function to create student objects
// function Student(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.greet = ()  => {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. find my address at ${this.address}`);
//   };
// }
// const bob = new Student("Bob", 21, "789 Pine Rd");
// const emily = new Student("Emily", 19, "321 Maple St");
// bob.greet();
// emily.greet();      

// class to create student objects
class StudentClass {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  greet = () => {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. find my address at ${this.address}`);
  }
}

const charlie = new StudentClass("Charlie", 23, "987 Cedar Ln");
const diana = new StudentClass("Diana", 18, "654 Birch Blvd");
charlie.greet();
diana.greet();