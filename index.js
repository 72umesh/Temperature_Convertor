const Temperature = document.getElementById("temperatureUnit");
const FromUnit = document.getElementById("fromUnit");
const ToUnit = document.getElementById("toUnit");
const convertButton = document.getElementById("convert-btn");
const resultToDisplay = document.getElementById("result");

function checkUnits() {
  return (convertButton.disabled =
    Temperature.value && FromUnit.value && ToUnit.value ? false : true);
}
Temperature.addEventListener("change", checkUnits);
FromUnit.addEventListener("change", checkUnits);
ToUnit.addEventListener("change", checkUnits);

function ConvertTemperature() {
  const value = parseFloat(Temperature.value);
  let Celsius;

  const from = FromUnit.value;
  const to = ToUnit.value;

  switch (from) {
    case "Celsius":
      Celsius = value;
      break;

    case "Fahrenheit":
      Celsius = (value - 32) * (5 / 9);
      break;

    case "Kelvin":
      Celsius = value - 273.15;
      break;

    default:
      return;
  }

  let result;
  switch (to) {
    case "Celsius":
      result = Celsius;
      break;

    case "Fahrenheit":
      result = Celsius * (9 / 5) + 32;
      break;

    case "Kelvin":
      result = Celsius + 273.15;
      break;

    default:
      return;
  }

  resultToDisplay.textContent = `${value} ${from} is ${result.toFixed(
    2
  )} ${to}`;
}
convertButton.addEventListener("click", ConvertTemperature);
