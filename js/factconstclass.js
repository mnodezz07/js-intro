//factory function to create student objects
function createStudent(name, age, address) {
  return {
    name: name,
    age: age,
    address: address,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}
const alice = createStudent("Alice", 22, "123 Main St");
const john = createStudent("John", 20, "456 Oak Ave");
alice.greet();
john.greet();

//constructor function to create student objects
function Student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.greet = ()  => {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. find my address at ${this.address}`);
  };
}
const bob = new Student("Bob", 21, "789 Pine Rd");
const emily = new Student("Emily", 19, "321 Maple St");
bob.greet();
emily.greet();      

// to get values form a database and display them on the console, you can use a function that simulates fetching data from a database. Here's an example of how you might do this:
function fetchStudentsFromDatabase() {
  // Simulating fetching data from a database
  return [
    { name: "Alice", age: 22, address: "123 Main St" },
    { name: "John", age: 20, address: "456 Oak Ave" },
    { name: "Bob", age: 21, address: "789 Pine Rd" },
    { name: "Emily", age: 19, address: "321 Maple St" }
  ];
}

const students = fetchStudentsFromDatabase();
students.forEach(student => {
  const studentObj = new Student(student.name, student.age, student.address);
  studentObj.greet();
}); 