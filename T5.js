// Array to store the numbers entered by the user
let numbers = [];

// Function to prompt for numbers
function collectNumbers() {
    while (true) {
        // Prompt the user for a number
        let input = prompt("Enter a number:");

        // Convert input to a number
        let number = parseFloat(input);

        // Check if the input is valid
        if (isNaN(number)) {
            alert("Please enter a valid number.");
            continue;
        }

        // Check if the number has already been entered
        if (numbers.includes(number)) {
            alert(`The number ${number} has already been given. Stopping.`);
            break;
        }

        // Add the number to the list
        numbers.push(number);
    }

    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Print the sorted numbers to the console
    console.log("Numbers entered in ascending order:", numbers);
}

// Run the program
collectNumbers();
