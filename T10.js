// Function to prompt the user for input with a custom message
function promptUser(message) {
    return prompt(message);
}

// Function to sort and print the results
function printResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes); // Sort candidates by votes in descending order

    console.log("Voting Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });

    // Find the winner (first in the sorted array)
    const winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    // Display the results on the web page
    let results = `<h2>Voting Results:</h2>`;
    candidates.forEach(candidate => {
        results += `<p>${candidate.name}: ${candidate.votes} votes</p>`;
    });
    results += `<h3>The winner is ${winner.name} with ${winner.votes} votes.</h3>`;

    document.getElementById("results").innerHTML = results;
}

// Main voting function
function startVoting() {
    // Ask for the number of candidates
    const numCandidates = parseInt(promptUser("How many candidates are there?"), 10);
    const candidates = [];

    // Ask for the names of the candidates
    for (let i = 1; i <= numCandidates; i++) {
        const name = promptUser(`Enter the name for candidate ${i}:`);
        candidates.push({ name: name, votes: 0 });
    }

    // Ask for the number of voters
    const numVoters = parseInt(promptUser("How many voters are there?"), 10);

    // Voting process
    for (let i = 0; i < numVoters; i++) {
        const vote = promptUser(`Voter ${i + 1}, who do you vote for? (Enter candidate's name or leave empty for no vote):`);

        // Check if vote is not empty and is a valid candidate
        if (vote) {
            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes += 1; // Increase the vote count for the selected candidate
            } else {
                console.log(`Invalid candidate name: ${vote}`);
            }
        } else {
            console.log("No vote cast.");
        }
    }

    // Print results to the console and the web page
    printResults(candidates);
}

// Start the voting process
startVoting();
