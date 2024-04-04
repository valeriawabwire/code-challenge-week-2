
function promptUserForInput(message) {
  return parseFloat(prompt(message));
}
const FirstNumber = promptUserForInput("Enter the first number :"); // promptUserForInput("Enter the first number");
const SecondNumber = promptUserForInput("Enter the second number :"); // promptUserForInput("Enter the second number");

function generateArray(mark, limit) {
  let results = []; // Initialize an empty array to store the generated numbers
  for (let i = mark; i <= limit; i++) { // Loop from mark to limit 
      results.push(i); // Push the current value of 'i' into the 'results' 
  }
  return results; // Return the generated array
}

const array = generateArray(FirstNumber, SecondNumber); // Generate
console.log(array);
window.alert(array)
