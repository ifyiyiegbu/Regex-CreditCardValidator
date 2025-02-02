const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define regex patterns for card types
const cardPatterns = {
    Visa: /^4[0-9]{15}$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
    Verve: /^(5061|5062|5063|5067|5068)(?:[0-9]{12}|[0-9]{14}|[0-9]{15})$/
 };

function validateCreditCardNumber(number) {
    // Remove any non-digit characters
    number = number.replace(/\D/g, '');

    // Check if the card number is empty or not a number
    if (!number || isNaN(number)) {
        return { valid: false, type: 'Invalid' };
    }

    // Test for card type using the regex pattern
    let cardType = 'Unknown';
    for (const [type, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(number)) {
            cardType = type;
            break;
        }
    }

    // Luhn algorithm for validating credit cards
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit = (digit % 10) + 1;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    const isValid = (sum % 10) === 0;

    return { valid: isValid, type: isValid ? cardType : 'Invalid' };
}

// Implementation
function promptUser() {
    readline.question("Enter your credit card number for validation (or type 'q' to quit): ", (input) => {
        if (input.trim().toLowerCase() === 'q') {
            console.log("Exiting the program.");
            readline.close();
            return;
        }

        const result = validateCreditCardNumber(input);
        if (result.valid) {
            console.log(`The credit card number is valid and is a ${result.type} card.`);
        } else {
            console.log("The credit card number is invalid.");
        }

        promptUser();
    });
}

// Start the prompt loop
promptUser();