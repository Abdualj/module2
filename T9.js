// Function that filters even numbers from an array
function even(array) {
    const evenArray = []; // Initialize an empty array to hold even numbers

    // Iterate through the array and push even numbers to evenArray
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }

    return evenArray; // Return the new array with even numbers
}

// Example hardcoded array
const numbers = [2, 7, 4, 5, 8, 10, 11];

// Call the even function with the array
const evenNumbers = even(numbers);

// Print both the original and new arrays to the console
console.log('Original Array:', numbers);
console.log('Even Numbers Array:', evenNumbers);

// Display the arrays on the webpage
document.getElementById('originalArray').textContent = `Original Array: ${numbers}`;
document.getElementById('evenArray').textContent = `Even Numbers Array: ${evenNumbers}`;
