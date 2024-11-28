// Initialize an empty array to store the numbers
let numbers = [];

// Ask for numbers until the user inputs 0
while (true) {
    let input = prompt("Enter a number (or 0 to stop):");

    // Convert input to a number
    let num = parseInt(input);

    // If the user enters 0, break the loop
    if (num === 0) {
        break;
    }

    // If the input is a valid number, add it to the array
    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.log("That's not a valid number! Try again.");
    }
}

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// Print the sorted numbers to the console
console.log("Numbers sorted from largest to smallest:");
console.log(numbers);
