// This is a nested function example in JavaScript

// function nestedFunction() {
//     function innerFunction() {
//         console.log("Inner function called");
//     }
//     innerFunction();
// }   


// // nestedFunction(); // makeReservation for customers
// const prompt = require('prompt-sync')();
// function makeReservation() {
//     console.log("Welcome to our restaurant! Please provide your name and the number of guests for the reservation.");

//     const cusmerData = {};
//     cusmerData.name = prompt("Enter your name:");
//     cusmerData.guests = prompt("Enter the number of guests:");

//     function displayReservationDetails() {
//        console.log(`Thank you, ${cusmerData.name}. Your reservation for ${cusmerData.guests} guests has been confirmed.`);
//     }

//     displayReservationDetails();
// }
// makeReservation();

// // Example of a nested function to for flatironLand Company that provides immediate feedback to customers as they explore different services and products. The nested function will be used to display the details of the selected service or product rides
// const prompt = require('prompt-sync')();
// function ridesSelection() {
//     console.log("Welcome to FlatironLand! Please select a ride to explore its details.");

//     const rides = {};
//     rides.name = prompt("Enter your name:");
//     rides.trips = prompt("Enter the number of trips:");

//     function displayRideDetails() {
//     console.log(`Thank you, ${rides.name}. Your selection for ${rides.trips} trips has been confirmed.`);
//     }
//     displayRideDetails();
// }
// ridesSelection();   


//advance nested function example with ... for flatironLand Company that provides immediate feedback to customers as they explore different services and products. The nested function will be used to display the details of the selected service or product rides
// function exploreRides() {
// console.log("Welcome to FlatironLand! Please select a ride to explore its details.");

// const rides = {
//     "Roller Coaster": "Experience the thrill of our high-speed roller coaster with loops and drops!",
//     "Ferris Wheel": "Enjoy a relaxing ride on our Ferris Wheel with stunning views of the park.",
//     "Haunted House": "Dare to enter our Haunted House and face your fears in a spooky adventure.",
//     "Bumper Cars": "Have fun bumping into friends and family in our exciting bumper car arena."
// };

// const prompt = require('prompt-sync')();
// const selectedRide = prompt("Enter the name of the ride you want to explore: ");

// function displayRideDetails(ride) {
//     if (rides[ride]) {
//         console.log(`Details for ${ride}: ${rides[ride]}`);
//     } else {
//         console.log("Sorry, that ride is not available. Please select a valid ride.");
//     }
// }

// displayRideDetails(selectedRide);
// }

// exploreRides(); 



// //nested function example with ... fFlatironland is a new theme park that wants to build a website to attract more visitors. 
// const prompt = require('prompt-sync')();
// function numberOfVisitors() {
//     console.log("Welcome to FlatironLand! Number of visitors to this website.");

//     const visitors = {};
//     visitors.name = prompt("Enter your name:");
//     visitors.visits = prompt("Enter the number of visits:");

//     function displayVisitorDetails() {
//         console.log(`Thank you, ${visitors.name}. You have visited our website ${visitors.visits} times.`);
//     }
    
//     displayVisitorDetails();        

// }   
// numberOfVisitors()  


// //other example of a nested function to for flatironLand Company that provides immediate feedback to customers as they explore different services and products. The nested function will be used to display the details of the selected service or product rides
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const themeParkRides = [
//     "Flatacoaster",
//     "Flata-Ferris Wheel",
//     "Flatburger bumper cars"
// ];

// function selectThemeParkRide() {

//     function displayRideDetails(rideName) {

//         if (!themeParkRides.includes(rideName)) {
//             console.log("Error: Invalid theme park ride!");
//         } else {

//             const ride = {
//                 name: rideName
//             };

//             if (ride.name === "Flatacoaster") {
//                 ride.description = "Flatacoaster is the tallest and quickest roller coaster in the world! It's Flatironland's signature ride! It's so fast, you'll be screaming 'FLATIRON!' in no time!";
//             } else if (ride.name === "Flata-Ferris Wheel") {
//                 ride.description = "Roller Coasters too scary for you? Enjoy a relaxing ride and some lovely views on the Flata-Ferris Wheel!";
//             } else if (ride.name === "Flatburger bumper cars") {
//                 ride.description = "Ride in our Flatburger bumper cars designed in the shape of burgers! You even get a free burger for riding!";
//             }

//             console.log(`You selected the ${ride.name} ride! Here's the ride description: ${ride.description}`);
//         }

//         readline.close();
//     }

//     readline.question(
//         "Please select a theme park ride:\n\n" +
//         "- Enter 'Flatacoaster' to select the Flatacoaster ride\n" +
//         "- Enter 'Flata-Ferris Wheel' to select the Flata-Ferris Wheel ride\n" +
//         "- Enter 'Flatburger bumper cars' to select the Flatburger bumper cars ride\n > ",
//         displayRideDetails
//     );
// }

// console.log("Welcome to Flatironland!");
// selectThemeParkRide();




// //Flatiron Movie Theater needs a feature on their website, Flatdango, that will allow users to view specific details for each movie, including its runtime, showtime, and a brief description. To keep the code organized and efficient, you’ll use a nested function within a main function to structure the movie data and generate a formatted message.
// function displayMovieDetails(movieName) {
//     const movies = {
//         "Inception": {
//             runtime: "2h 28m",
//             showtime: "7:00 PM",
//             description: "A skilled thief is given a chance at redemption if he can successfully perform an inception."
//         },
//         "The Matrix": {
//             runtime: "2h 16m",
//             showtime: "9:00 PM",
//             description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
//         },
//         "Interstellar": {
//             runtime: "2h 49m",
//             showtime: "6:30 PM",
//             description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
//         }
//     };

//     function formatMovieDetails(movie) {
//         if (movies[movie]) {
//             const details = movies[movie];
//             return `Movie: ${movie}\nRuntime: ${details.runtime}\nShowtime: ${details.showtime}\nDescription: ${details.description}`;
//         } else {
//             return "Sorry, that movie is not available. Please select a valid movie.";
//         }
//     }

//     const formattedDetails = formatMovieDetails(movieName);
//     console.log(formattedDetails);
// }

// // Example usage:
// const prompt = require('prompt-sync')();
// const selectedMovie = prompt("Enter the name of the movie you want to view details for (Inception, The Matrix, Interstellar): ");
// displayMovieDetails(selectedMovie); 

// // use arrow functions to make the code more concise and modern. Here's the updated version of the `displayMovieDetails` function using arrow functions:
// function displayMovieDetails(movieName) {
//     const movies = {
//         "Inception": {
//             runtime: "2h 28m",
//             showtime: "7:00 PM",
//             description: "A skilled thief is given a chance at redemption if he can successfully perform an inception."
//         },
//         "The Matrix": {
//             runtime: "2h 16m",
//             showtime: "9:00 PM",
//             description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
//         },
//         "Interstellar": {
//             runtime: "2h 49m",
//             showtime: "6:30 PM",
//             description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
//         }
//     };

//     const formatMovieDetails = (movie) => {
//         if (movies[movie]) {
//             const details = movies[movie];
//             return `Movie: ${movie}\nRuntime: ${details.runtime}\nShowtime: ${details.showtime}\nDescription: ${details.description}`;
//         } else {
//             return "Sorry, that movie is not available. Please select a valid movie.";
//         }
//     };

//     const formattedDetails = formatMovieDetails(movieName);
//     console.log(formattedDetails);
// }

// // Example usage:
// const prompt = require('prompt-sync')();
// const selectedMovie = prompt("Enter the name of the movie you want to view details for (Inception, The Matrix, Interstellar): ");
// displayMovieDetails(selectedMovie); 
