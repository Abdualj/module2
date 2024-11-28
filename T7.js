// Function to generate a random dice roll between 1 and the number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Main program
function main() {
    const form = document.getElementById('dice-form');
    const diceRollsList = document.getElementById('dice-rolls'); // Reference to the <ul> element

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Clear the previous dice rolls
        diceRollsList.innerHTML = '';

        // Get the number of sides from the input
        const sides = parseInt(document.getElementById('sides').value, 10);

        if (sides < 2) {
            alert("Dice must have at least 2 sides.");
            return;
        }

        let roll; // Variable to store each dice roll
        do {
            // Roll the dice
            roll = rollDice(sides);

            // Create a new list item for the result
            const listItem = document.createElement('li');
            listItem.textContent = `Rolled: ${roll}`;

            // Append the list item to the unordered list
            diceRollsList.appendChild(listItem);

        } while (roll !== sides); // Continue rolling until the maximum number is rolled
    });
}

// Run the main program
main();
