// create code that adds a new number
function add(a, b) {
    return a + b;
}

// create code that subtracts a new number
function subtract(a, b) {
    return a - b;
}

// create code that multiplies a new number
function multiply(a, b) {
    return a * b;
}

// create code that divides a new number
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// create code that calculates the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// create code that calculates the square root of a number
function squareRoot(number) {
    if (number < 0) {
        return "Cannot calculate square root of a negative number";
    }
    return Math.sqrt(number);
}

