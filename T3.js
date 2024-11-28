// Array to store the names of the dogs
let dogNames = [];

// Prompt the user for six dog names
for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name.trim());
}

// Sort the dog names in reverse alphabetical order
dogNames.sort().reverse();

// Get the container element to display the list
const container = document.getElementById("dog-names-container");

// Create an unordered list element
const ul = document.createElement("ul");

// Add each dog's name as a list item
dogNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
});

// Append the unordered list to the container
container.appendChild(ul);
