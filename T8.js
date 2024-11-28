// Function to concatenate elements of an array into a single string
function concat(array) {
    let concatenatedString = ''; // Initialize an empty string
    for (let i = 0; i < array.length; i++) {
        concatenatedString += array[i]; // Add each element to the string
    }
    return concatenatedString; // Return the final concatenated string
}

// Example hardcoded array
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

// Call the concat function with the array
const result = concat(names);

// Print the result to the HTML document
document.getElementById('result').textContent = `Concatenated String: ${result}`;
