const prompt = require("prompt-sync")();

let numero = Number(prompt("Ingrese un numero: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Debe ingresar un número entero.");
} else if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}