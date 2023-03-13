// PUNTO 9

let numero = 0;

do {
  numero++;

  switch (true) {
    case numero % 4 === 0 && numero % 9 === 0:
      document.write(numero + " " + `(Múltiplo de 4 y 9)` + `<p> </p>`);
      break;
    case numero % 4 === 0:
      document.write(numero + " " + `(Múltiplo de 4)` + `<p> </p>`);
      break;
    case numero % 9 === 0:
      document.write(numero + " " + `(Múltiplo de 9)` + `<p> </p>`);
      break;
    default:
      document.write(`<p> ${numero} </p>`);
  }

  if (numero % 5 === 0) {
    document.write(`-------------------------` + `<p> </p>`);
  }
} while (numero < 500);

