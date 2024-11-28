// Initialaize an empty array to store the numbers
let numbers = [];

//Prpmpt the user for five numbers
for(let i = 0; i < 5; i++) {
    let input = parseFloat(prompt(`Enter number ${i + 1}:`));
    numbers.push(input); //add number to the array
}

//Print the numbers in reverse order
console.log("Numbers in reverse order:");
for (let i = numbers.length -1; i >=0; i--) {
    console.log(numbers[i]);
}