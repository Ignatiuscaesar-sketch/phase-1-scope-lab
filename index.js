// Write your solution in this file!
// Declare a global variable 'customerName'
var customerName = 'bob';

// Function to uppercase the global 'customerName'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable 'bestCustomer' and set its value
function setBestCustomer() {
  bestCustomer = 'not bob'; // This implicitly declares 'bestCustomer' as a global variable
}

// Function to change the value of the global variable 'bestCustomer'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'initial value';

// Function attempting to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // Direct attempt to reassign the constant
}

