// Select the input field and buttons
const inputField = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('.buttons button');

// Initialize an empty string to hold the current input
let currentInput = '';

// Function to update the input field
function updateInput(value) {
    currentInput += value;
    inputField.value = currentInput;
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression and update the input field
        currentInput = eval(currentInput).toString();
        inputField.value = currentInput;
    } catch (error) {
        inputField.value = 'Error';
        currentInput = '';
    }
}

// Function to clear the input
function clearInput() {
    currentInput = '';
    inputField.value = '';
}

// Function to delete the last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    inputField.value = currentInput;
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        if (buttonId === 'AC') {
            clearInput();
        } else if (buttonId === 'DEL') {
            deleteLast();
        } else if (buttonId === 'equalto') {
            calculate();
        } else {
            updateInput(button.textContent);
        }
    });
});