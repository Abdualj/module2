// Function to generate a random dice roll between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Main program
function main() {
    const diceRollsList = document.getElementById('dice-rolls'); // Reference to the <ul> element
    let roll; // Variable to store each dice roll

    do {
        // Roll the dice
        roll = rollDice();

        // Create a new list item for the result
        const listItem = document.createElement('li');
        listItem.textContent = `Rolled: ${roll}`;

        // Append the list item to the unordered list
        diceRollsList.appendChild(listItem);

    } while (roll !== 6); // Continue rolling until a 6 is rolled
}

// Run the main program
main();

