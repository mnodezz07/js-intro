// const phone = {
//   brand: "Apple",
//   model: "iPhone 13",
//   color: "Midnight",
//   storage: "128GB",
//   price: 799,
// };  
// console.log(phone);

// //use arrow functions to make the code more concise and modern. Here's the updated version of the `displayMovieDetails` function using arrow functions:
// const phone = {
//   brand: "Apple",
//   model: "iPhone 13",
//   color: "Midnight",
//   storage: "128GB",
//   price: 79900,
// };

// const displayPhoneDetails = (phone) => {
//   const { brand, model, color, storage, price } = phone;
//   return `Brand: ${brand}\nModel: ${model}\nColor: ${color}\nStorage: ${storage}\nPrice: ksh${price}`;
// };

// console.log(displayPhoneDetails(phone));    

const phone = {
  brand: "Apple",
  model: "iPhone 13",
  color: "Midnight",
  storage: "128GB",
  price: 799,
};  

// modify properties of the phone object (don't reassign the const variable)
phone.color = "Starlight";

// add a new property to the phone object
phone.storage = "256GB";
phone.operatingSystem = "iOS 15";

//change the price of the phone
phone.price = 899000;

// console.log(phone);
// console.log(phone["brand"]); // Accessing property using bracket notation
// console.log(phone.model); // Accessing property using dot notation

console.log(Object.keys(phone))

