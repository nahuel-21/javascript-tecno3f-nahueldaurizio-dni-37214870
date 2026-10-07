const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad: "));

if (isNaN(edad) || edad < 0) {
    console.log("Debe ingresar una edad.");
} else if (edad < 12) {
    console.log("Niño");
} else if (edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}