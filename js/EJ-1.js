// PUNTO 1

let edad = prompt("Ingrese la edad");

switch (true) {
  case edad < 18:
    document.write("No puede conducir");
    break;

  case edad >= 18 && edad < 101:
    document.write("Puede conducir");
    break;

  default:
    document.write("No se ingreso un caracter valido");
}
