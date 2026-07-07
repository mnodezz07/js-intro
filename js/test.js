// // Variable declarations and console logging
// let x = 5;
// console.log(x.toFixed(2)); // Output: 5.00000




// let y = 3.14159;
// let integer = Math.trunc(y); // Round to 2 decimal places
// console.log(integer);





// // 1. Take an initial string
// let text = "I love eating delicious apples every day.";

// // 2. Make it uppercase
// // Note: Because we uppercase it first, the words inside will now be capitalized.
// let upperText = text.toUpperCase();
// // Result: "I LOVE EATING DELICIOUS APPLES EVERY DAY."

// // 3. Replace one word with the word "CAKE"
// // We look for "APPLES" (since it's now uppercase) and replace it.
// let replacedText = upperText.replace("APPLES", "CAKE");
// // Result: "I LOVE EATING DELICIOUS CAKE EVERY DAY."

// // 4. Slice it
// // slice(start, end) extracts a section of a string. 
// // Let's slice out the phrase "DELICIOUS CAKE" (indices 14 to 28)
// let slicedText = replacedText.slice(14, 28);
// // Result: "DELICIOUS CAKE"

// console.log(slicedText); // Output: "DELICIOUS CAKE"


// // Array
// // Add 60 to the end - Use the .push() method to append an element to the end of an array.
// let numbers = [10, 20, 30];
// numbers.push(60);
// console.log(numbers);  

// console.log(numbers.pop());
// console.log(numbers);// Remove the last element - Use the .pop() method to remove the last element from an array.

// let numbers2 = [20, 30, 40];
// console.log(numbers2.map(x => x * 2)); // Output: [40, 60, 80] - Use the .map() method to create a new array with each element doubled.

// let fruits = ["banana", "mango", "orange"];
// console.log(fruits.shift()); // Output: "banana" - Use the .shift() method to remove the first element from an array.
// console.log(fruits); // Output: ["mango", "orange"] - The array now contains only the remaining elements.
// console.log(fruits.indexOf("orange")); // Output: 1 - The index of the element "orange" in the array.
// console.log(fruits.includes("mango")); // Output: true - Check if the array includes the element "mango".


// let carBrands = ["Toyota", "Honda", "Ford"];
// console.log(carBrands.shift()); // Output: "Toyota" - Remove the first element from the array.
// console.log(carBrands); // Output: ["Honda", "Ford"] - The array now contains only the remaining elements.

// console.log(carBrands.pop()); // Output: "Ford" - Remove the last element from the array.
// console.log(carBrands); // Output: ["Honda"] - The array now contains only the remaining element.

// console.log(carBrands.indexOf("Honda")); // Output: 0 - The index of the element "Honda" in the array.
// console.log(carBrands.includes("Toyota")); // Output: false - Check if the array includes the element "Toyota".


// let players = ["Ronaldo", "Messi", "Bruno", "Ronny", "Terry"];
// console.log(players.concat());
// console.log(players.indexOf());
// console.log(players.includes());
// console.log(players.splice());
// console.log(players)
// console.log(players.push());
// console.log(players.sort())
// console.log(players.at(3))
// console.log(players.includes(78));
// console.log(players.slice());
// console.log(players.pop());
// console.log(players.push());
// console.log(players);
// console.log(players.pop());


// OBJESTS

// const book = {
//                 name: "Science",
//                 price: 100,
//                 Author: "Denis",
//                 Year: 1999
//                 };

// console.log(book)
// console.log(book["name"]);

// //Adding genre
// book.genre = "Education";

// console.log(book)

// //changing year
// book.Year = 2006

// console.log(book)

// //deleting Author
// delete book.Author;
// console.log(book)

// //final
// console.log(book)

// console.log(Object.keys(book))

// console.log(Object.values(book))

// console.log(Object.entries(book))

// console.log(Object.hasOwn(book, "name"))

// console.log(Object.length)

// console.log(Object.name)

// console.log(Object.freeze(book))

// book.Location = "Nairobi"

// console.log(book)

// console.log(Object.isFrozen(book))




// FUNCTIONS

// function book (b) {
//     console.log("Details of the book:" + b)
// };
// book(' Y')
// book(" Author")
// book(" Name")

// let email = "denis.yegon@students.moringaschool.com"

// let namePart = email.split("@"[0]);

// console.log(namePart);


// let namePart = email.at('.'[0])
// console.log(namePart)


// let num = 4
// num === 1

// 1 === 1 
// 2 !== 1

// 7 === 5

// const c = 3

// console.log(c)

// 1 === 3

//  let age = 10; 
//         if (age === 10)
//         {
//             console.log ("Admitted");
//         }
//     else if (age > 10)
//         {
//             console.log("Not admitted");
//         }
//     else 
//             console.log('Details Not Found');


// function familiyNames(name) {
//     console.log("Hello " + name)
// }
// familiyNames("Jane")
// familiyNames("Densi")

// function familyName(name){
//     return(name)
// }
// console.log(name)

// function makeReservation() {
//     console.log("Welcome to Flatiron Diner's dinner reservation page!");

//     const customerData = {};
//     customerData.firstName = prompt("What is your first name?");
//     customerData.lastName = prompt("What is your last name?");
//     customerData.partySize = prompt("How many people will be in your party?");
//     customerData.reservationDate = prompt("Which date would you like to reserve for?");
//     customerData.reservationTime = prompt("Which time would you like to reserve for?");

//     function displayReservationDetails(){
//         console.log(`${customerData.firstName} ${customerData.lastName} has successfully made a reservation with a party size of ${customerData.partySize} for ${customerData.reservationDate} at ${customerData.reservationTime}!`);
//     }

//     displayReservationDetails();
// }

// makeReservation("Jane", "Doe", 4, "2023-12-25", "7:00 PM");

// function doStuff(callback) {
//     callback();
// }
// function oderFood() {
//     console.log("No eating in the diner, please order your food online!");
// }
// function walToWork() {
//     console.log("Welcome to Flatiron Diner's food ordering page!");
// }

// let m1 = "Jan"
// let m2 = "Feb"

// if (m1 === "Jan") {
//     doStuff(walToWork); 
// }
// if (m2 === "Feb") {
//     doStuff(oderFood);
// }




// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number + 9);
// }); 


// function createAccountType(type) {
//     return function(owner) {
//         console.log(`${owner} has a ${type} account.`);
//     };
// }
// let acc1 = createAccountType("Admin");
// acc1("John"); // Output: John has a Admin account.
// // console.log(acc1("John")); // Output: John has a Admin account.

// let acc2 = createAccountType("User");
// let acc3 = createAccountType("Guest");
// acc2("Mary"); // Output: Mary has a User account.
// acc3("Alex"); // Output: Alex has a Guest account.


// let name = "John";
// function printName() {
//     let thirddName = "Smith";
//     console.log(name); // Accessing the outer variable
//     console.log(`from function ${thirddName}`); // Accessing the local variable

//     if(thirddName === "Smith") {
//         console.log("from if block: thirddName is Smith");
//         console.log(`from if block ${name}`); // Accessing the outer variable
//         console.log(`from if block ${thirddName}`); // Accessing the local variable
    
//     }
// }
// console.log(name); // This will log "John" because name is defined in the outer scope
// console.log(thirddName); // This will throw an error because thirddName is not defined in this scope
// printName(); // This will log "John" and "Smith" because printName has access to both the outer and local variables 


// let name = ["John", "Jane", "Doe", "Smith", "Emily"];
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// let name = ["John", "Jane", "Doe", "Smith", "Emily"];

// let i = 0;
// do {
//     console.log(name[i]);
//     i++;
// } while (i < name.length);

// let name = ["John", "Jane", "Doe", "Smith", "Emily"];
// while (name.length > 0) {
//     console.log(name.pop());
// }

// let name = ["John", "Jane", "Doe", "Smith", "Emily"];
// name.forEach(element =>  (console.log(element)));     

let name = ["John", "Jane", "Doe", "Smith", "Emily"];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}