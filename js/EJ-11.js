// PUNTO 11

let n1 = prompt("Ingrese el nombre");
let x1 = parseInt(prompt("Ingrese la edad"));
let n2 = prompt("Ingrese el nombre");
let x2 = parseInt(prompt("Ingrese la edad"));
let n3 = prompt("Ingrese el nombre");
let x3 = parseInt(prompt("Ingrese la edad"));

let mayor = Math.max(x1, x2, x3);

switch (true) {
  case mayor === x1:
    document.write(
      `El mas grande es <b> ${n1} </b>  que tiene <b> ${x1} </b> años de edad.`
    );
    break;
  case mayor === x2:
    document.write(
      `El mas grande es <b> ${n2} </b>  que tiene <b> ${x2} </b> años de edad.`
    );
    break;
  case mayor === x3:
    document.write(
      `El mas grande es <b> ${n3} </b>  que tiene <b> ${x3} </b> años de edad.`
    );
    break;
  default:
    document.write("Tienen la misma edad");
}
