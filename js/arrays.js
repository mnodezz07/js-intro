// BREAK will terminate the loop and CONTINUE will skip the current iteration and move to the next one
// for(let i = 5; i <=10; i++) {
//     if(i % 2 === 0) {
//         break
//     }
//     console.log(i)
// }


// for(let i = 5; i <=10; i++) {
//     if(i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }



//forEach map find filter reduce

// //forEach to iterate over an array and perform an action on each element
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach(function(number) {
//     console.log(number)
// })

// //for Map  - to modify the array and return a new array
// let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let doubledMarks = marks.map(function(mark) {
//     return mark + 2     // dont forget to return the value otherwise it will return undefined
// })
// console.log(doubledMarks)


// //for find - to find the first element that satisfies a condition
// let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// let firstEvenMark = marks.find(function(mark) {
//     return mark % 8 === 0 // it returns the first element that satisfies the condition, in this case, the first even number in the array
// })
// console.log(firstEvenMark) // Output: 8

// //filter - to filter the array and return a new array with elements that satisfy a condition
// let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenMarks = marks.filter(function(mark) {
//     return mark % 2 === 0 // it returns a new array with all the even numbers in the array
// })
// console.log(evenMarks) // Output: [2, 4, 6, 8, 10]  

// //other example of filter - to filter the array and return a new array with elements that satisfy a condition
// let marks = [78, 27, 23, 63, 34, 75, 86, 75, 27, 58, 90, 100]
// let toRemainAtSchool = marks.filter(function(mark) {
//     return mark < 50 // it returns a new array with all the numbers less than 4 in the array
// })
// console.log(toRemainAtSchool) // Output: [1, 2, 3 ] 

// //other example of filter - startsWith - to filter the array and return a new array with elements that satisfy a condition
// let names = ["John", "Jane", "Doe", "Smith", "Emily"]
// let nameWithJ = names.filter(function(name) {
//     return name.startsWith("J") // it returns a new array with all the names that start with J in the array
// })
// console.log(nameWithJ) // Output: ["John", "Jane"]



// // reduce - to reduce the array to a single value   
// let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = marks.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue // it returns the sum of all the numbers in the array
// })
// console.log(sum) // Output: 55

// //other example of reduce - to reduce the array to a single value
// let marks = [71, 52, 39, 84, 55, 26, 17, 48, 69, 90]
// let max = marks.reduce(function(accumulator, currentValue) {
//     return currentValue > accumulator ? currentValue : accumulator // it returns the maximum value in the array
// })
// console.log(max) // Output: 90

// other version of reduce - to reduce the array to a single value
// let marks = [71, 52, 39, 84, 55, 26, 17, 48, 69, 90]
// let min = marks.reduce(function(accumulator, currentValue) {
//     return currentValue < accumulator ? currentValue : accumulator // it returns the minimum value in the array
// })
// console.log(min) // Output: 17

// other version of reduce - to reduce the array to a single value
// let marks = [71, 52, 39, 84, 55, 26, 17, 48, 69, 90]
// let average = marks.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue // it returns the sum of all the numbers in the array
// }, 0) / marks.length // divide by the length of the array to get the average
// console.log(average) // Output: 54.1

// //reduce - to convert an array to percentage of each element in the array
// let marks = [71, 52, 39, 84, 55, 26, 17, 48, 69, 90]
// let totalMarks = marks.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue // it returns the sum of all the numbers in the array
// }, 0) // initial value is 0
// let percentage = marks.map(function(mark) {
//     return (mark / totalMarks) * 100 // it returns the percentage of each element in the array
// })
// console.log(percentage) // Output: [7.1, 5.2, 3.9, 8.4, 5.5, 2.6, 1.7, 4.8, 6.9, 9]

// array to add values of an array and return the sum of all the values in the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue // it returns the sum of all the numbers in the array
}, 0) // initial value is 0
console.log(sum) // Output: 55  
// do average of an array using reduce
let average = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue // it returns the sum of all the numbers in the array
}, 0) / numbers.length // divide by the length of the array to get the average
console.log(average) // Output: 5.5

//summarize the array using reduce - to get the sum, average, max and min of an array
let numbers = [71, 52, 39, 84, 55, 26, 17, 48, 69, 90]
let summary = numbers.reduce(function(accumulator, currentValue) {
    accumulator.sum += currentValue // it returns the sum of all the numbers in the array
    accumulator.max = currentValue > accumulator.max ? currentValue : accumulator.max // it returns the maximum value in the array
    accumulator.min = currentValue < accumulator.min ? currentValue : accumulator.min // it returns the minimum value in the array
    return accumulator
}, {sum: 0, max: -Infinity, min: Infinity}) // initial value is an object with sum, max and min properties
summary.average = summary.sum / numbers.length // divide by the length of the array to get the average
console.log(summary) // Output: {sum: 550, max: 90, min: 17, average: 55}   
