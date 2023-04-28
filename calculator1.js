// Get calculation form localStorage
let calculation = localStorage.getItem('calculation') || '';

// Function to update calculation
function updateCalculation(value) {
  calculation += value;

  // Display calculation on page
  displayCalculation();

  // Store the calculation permanently in local storage after updating it
  localStorage.setItem('calculation', calculation);
}

// Function to display calculation on the page
function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}