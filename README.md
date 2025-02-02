# Regex-CreditCardValidator

A simple command line application that matches credit card numbers to the appropriate regular expression patterns and validates the credit card.

Run the code on the command line using `node CardValidator.js`

## Description of the Regex Patterns used for verifying the different card types

NB: The card types used in this program are the mainstream card types widely used in Nigeria.

### Visa Card Regex Pattern

The Regex Pattern used to test for a Visa card is `/^4[0-9]{15}$/`.

- ^4:- the first character in the string should be the number 4.
- [0-9]{15}:- following the number 4 should be 15 digits between 0 and 9.
- $:- means the string should end exactly as stated in the pattern.

### Master Card Regex Pattern

The pattern used to test for a Master card is `/^5[1-5][0-9]{14}$/`

- 5 means that the first character in the string should be the number 5.
- [1-5] means that the second character should be a digit between 1 and 5.
- [0-9]{14} means that after the second string should be 14 digits between 0 and 9.
- ^ and $:- The caret symbol and the dollar symbol at the beginning and end of the pattern mean that the string should begin and end as the expression states.

### Verve Card Regex Pattern

The pattern used to test for a Verve Card is `/^[5061|5062|5063|5067|5068](?:[0-9]{12}|[0-9]{14}|[0-9]{15})$/`

- ^(5061|5062|5063|5067|5068):- The string should start with either 5061,5062,5063,5067 or 5068.
- (?:[0-9]{12}|[0-9]{14}|[0-9]{15}):- `?:` indicates that the expressions in the bracket are optional or what is called a non-capturing group. Therefore, after the first four digits from the preceeding options, the next characters could be either of the following:
  
- [0-9]{12}: 12 digits between 0 and 9. In which case, the card number will be 16 digits long.
- [0-9]{14}: 14 digits between 0 and 9. In which case, the card number will be 18 digits long.
- [0-9]{15}: 15 digits between 0 and 9. In which case, the card number will be 19 digits long.

- $:- indicates that the preceeding expression should be the last expression in the string.
