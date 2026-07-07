// //standard function example
// function helloWorld() {
//     console.log("Hello, World!");
// }
// helloWorld();

// //anonymous function example
// const greet = function() {
//     console.log(`Hello, Denis`);
// };
// greet();

// //arrow function example
// const greetArrow = () => console.log(`Hello, Yegon`);
// greetArrow();

// //Note: For multi-line arrow functions, we reintroduce curly braces and return as needed, just like a standard function.
// //arrow function example
// const greetArrow = () => {  
//     console.log(`Hello, Yegon`);
// };
// greetArrow();



// // anonymous and arrow functions - FlatBook is a social network that allows users to connect and share posts easily. To handle post creation, FlatBook uses anonymous functions and arrow functions to keep code modular and maintainable.
// const prompt = require('prompt-sync')();
// const posts = ["My cat is so cute!", "I'm enjoying a lovely vacation at the Bahamas!", "FlatBook is the best website ever!"];
//     function makePost(addAndReturnNewPost, getSuccessMessage){
//         const postText = prompt("Enter the text for your post:");
//         posts.push(postText);

//         const successMessage = getSuccessMessage(postText);
//         console.log(successMessage);
//     }

//     function getSuccessMessage(postText) {
//         return `Your post has been successfully created! Here is the post that you made:\n\n${postText}`;
//     }   
//     makePost(posts, getSuccessMessage);




// // let’s apply these concepts in a new scenario with FlatTube, a video-sharing website. FlatTube wants to add a feature allowing users to leave comments on videos. By using anonymous and arrow functions, we can create functions that are flexible and efficient, ideal for tasks that don’t require a specific function name. By understanding and implementing each step, you’ll build a repeatable framework for using these function types in various coding tasks.
// const prompt = require('prompt-sync')();
// const comments = ["Great video!", "I learned a lot from this tutorial.", "This is my favorite channel!"];

// function leaveComment(addAndReturnNewComment, getSuccessMessage) {
//     const commentText = prompt("Enter your comment:");
//     comments.push(commentText);

//     const successMessage = getSuccessMessage(commentText);
//     console.log(successMessage);
// }

// function getSuccessMessage(commentText) {
//     return `Your comment has been successfully posted! Here is the comment that you made:\n\n${commentText}`;
// }

// leaveComment(comments, getSuccessMessage);    


