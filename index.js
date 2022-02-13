const fahrenheitToCelsius = require('fahrenheit-to-celsius');

const freezingCelsius = 0;
const boilingCelsius = 100;

const freezingFahrenheit = fahrenheitToCelsius(freezingCelsius);
const boilingFahrenheit = fahrenheitToCelsius(boilingCelsius);

console.log(`The freezing point of water in Fahrenheit is ${freezingFahrenheit}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingFahrenheit}`);