// Variable declarations and console logging
let x = 5;
console.log(x);

let y = "Hello, World!";
console.log(y); 
console.log(typeof y);
console.log(y.length);
console.log(y.includes("Hello"));
console.log(y.toUpperCase());
console.log(y.toLowerCase());
console.log(y.search("World"));
console.log(y.replace("World", "JavaScript"));
console.log(y.split(","));
console.log(y.charAt(9));
console.log(y.indexOf("World"));


let z = true;
console.log(z);
console.log(typeof z);




// Array and Object examples
let a = [1, 2, 3, 4, 5];
console.log(a);
console.log(a.length);
console.log(a[2]);
console.log(a.push(6));
console.log(a.pop());

console.log(a.shift());
console.log(a.unshift(0));
console.log(a.indexOf(3));
console.log(a.includes(4));
console.log(a.join(", "));  



const fruits = ["apple", "banana", "cherry"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
fruits.push("date");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("apricot");
console.log(fruits); 


let b = { name: "John", age: 30 };
console.log(b);


//function to greet a person
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("denis"));

let c = "Aiden";
let d = "is a great developer!";
let f = new String(123); // Creating a string object using the String constructor ");

console.log(c + " " + d); // Concatenation of strings


let e = c + " " + d;        
console.log(e); // Concatenation of strings


console.log(typeof c + " " + typeof f);   // Checking the type of variable c and f
console.log(c.length); // Getting the length of string c
console.log(c.toUpperCase()); // Converting string c to uppercase
console.log(d.toLowerCase()); // Converting string d to lowercase
console.log(c.includes("den")); // Checking if string c includes "den"
console.log(c.replace("Aiden", "Alex")); // Replacing "Aiden" with "Alex" in string c
console.log(c.split("")); // Splitting string c into an array of characters
console.log(c.charAt(2)); // Getting the character at index 2 of string c
console.log(c.indexOf("d")); // Getting the index of character "d" in string c 
