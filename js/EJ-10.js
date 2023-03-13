// PUNTO 10

const filas = prompt("Ingrese un numero de filas");
const columnas = prompt("Ingrese un numero de columnas");

let producto = filas * columnas;

document.write(` <table> <tbody>`);

for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`<tr>`);

  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`<td> ${producto} </td>`);

    producto--;
  }
  document.write(`</tr>`);
}

document.write(`</tbody> </table>`);
