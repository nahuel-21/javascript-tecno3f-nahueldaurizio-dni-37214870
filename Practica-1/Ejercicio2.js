const prompt = require("prompt-sync")();

let lado1= parseFloat(prompt("Ingre lado1: "));
let lado2= parseFloat(prompt("Ingre lado2: "));
let lado3= parseFloat(prompt("Ingre lado3: "));

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)){
    console.log("Ingrese medida: ");
} else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Los lados deben ser mayores que cero.");
} else if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles");
} else {
    console.log("Escaleno");
}
