const prompt = require("prompt-sync")();

let nota = Number(prompt("Ingrese su calificación (0 a 100): "));

if (isNaN(nota) || nota < 0 || nota > 100) {
    console.log("La calificación debe ser un número entre 0 y 100.");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}