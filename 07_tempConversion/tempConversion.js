const convertToCelsius = function(degreesF) {
  let degreesCelsius = (degreesF - 32) * (5/9);
  let roundedDegreesCelsius = degreesCelsius.toFixed(1);
  let floatCelsius = parseFloat(roundedDegreesCelsius);
  return floatCelsius;
};

const convertToFahrenheit = function(degreesC) {
  let degreesFahrenheit = (degreesC * (9/5)) + 32;
  let roundedDegreesFahrenheit = degreesFahrenheit.toFixed(1);
  let floatFahrenheit = parseFloat(roundedDegreesFahrenheit);
  return floatFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
