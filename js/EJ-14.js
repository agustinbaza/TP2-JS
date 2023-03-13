// PUNTO 14

let texto = prompt("Ingrese un texto");

let guion = "";

for (i = 0; i < texto.length; i++) {
  guion = texto.charAt(i);

  if (i === texto.length - 1) {
    document.write(guion);
  } else {
    document.write(guion + "-");
  }
}
