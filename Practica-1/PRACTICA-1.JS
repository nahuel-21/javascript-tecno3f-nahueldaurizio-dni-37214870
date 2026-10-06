const prompt = require("prompt-sync")();

let entrada = prompt("Ingrese un numero entero: ");

let numero = parseInt(entrada);

if (isNaN(numero)){
    console.log("El numero ingreso no es numero entero. ");
} else if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0){
    console.log("negativo");
} else {
    console.log("Cero");
}
