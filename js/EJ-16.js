// PUNTO 16

const texto = prompt("Introduce un texto");
let reves = "";

for (let i = texto.length - 1; i >= 0; i--) {
  reves += texto[i];
}

document.write(`El texto invertido es: ${reves}`);
