const prompt = require("prompt-sync")();

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar valores numéricos.");
} else if (num1 > num2) {
    console.log("El mayor es: " + num1);
} else if (num2 > num1) {
    console.log("El mayor es: " + num2);
} else {
    console.log("Los dos números son iguales.");
}