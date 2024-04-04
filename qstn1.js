// Function to swap the case of each character in a string
function swapCase(str) {
   
    return str.replace(/./g, function(char) { // /./g is used to indicate global(like some global search thing)
        // Use a callback function to determine whether to convert the character to lowercase or uppercase
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
}


function swapCaseAndDisplay() {
    // Get the input text from the HTML input element with the id 'InputText'
    const textInput = document.getElementById('InputText').value;
    // Call the swapCase function to swap the case of the input text
    const swappedText = swapCase(textInput);
 
    document.getElementById('output').textContent = swappedText;
}