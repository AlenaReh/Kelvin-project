//The forecast today is 293 Kelvin. 
//To start, create a variable named kelvin, 
//and set it equal to 293

//Created a new variable kelvin with value of 293
const kelvin = 293;

//Created a new variable celsius which is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

//Created a new variable fahrenheit using the provided formula and floor()method from the built-in Math objrct to tound down the Fahrenheit temperature.
const fahrenheit = Math.floor(celsius * ( 9 / 5 ) + 32);

const newton = Math.floor(celsius * (33/100));

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// console.log (`The temperature is ${newton} degrees Newton.`);