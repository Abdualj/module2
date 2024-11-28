// Ask the user for the number of participants
const numParticipants = parseInt(prompt("Enter the number of participants:"));

if (!isNaN(numParticipants) && numParticipants > 0) {
    // Create an empty array to store participant names
    let participants = [];

    // Collect participant names
    for (let i = 0; i < numParticipants; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name.trim());
    }

    // Sort the names alphabetically
    participants.sort();

    // Get the container element from the HTML
    const container = document.getElementById("participant-container");

    // Create an ordered list element
    const ol = document.createElement("ol");

    // Add each name to the ordered list
    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = participant;
        ol.appendChild(li);
    });

    // Append the ordered list to the container
    container.appendChild(ol);
} else {
    alert("Please enter a valid number of participants.");
}
