// PUNTO 8

let maximo = prompt("INGRESE NÚMERO NO MAYOR A 50");

if (maximo <= 50 && maximo > 0) {
  let numFila = "1";

  for (let contador = 1; contador <= maximo; contador++) {
    document.write(numFila + "<br>");
    numFila = numFila + `${contador + 1}`;
  }
}