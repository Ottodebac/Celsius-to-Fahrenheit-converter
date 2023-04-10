

const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celsius'); // Corrected spelling
const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", () => {
  console.log("Clear button clicked");
  fahrenheitInput.value = ''; // Clear the Fahrenheit input field
  celsiusInput.value = ''; // Clear the Celsius input field
});

fahrenheitInput.addEventListener('input', function() {
  const fahrenheit = this.value;
  convertToCelsius(fahrenheit);
});

celsiusInput.addEventListener('input', function() {
  const celsius = this.value;
  convertToFahrenheit(celsius);
});

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitInput.value = fahrenheit; // Update the Fahrenheit input field
}

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius; // Update the Celsius input field
}


