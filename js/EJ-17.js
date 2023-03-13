// PUNTO 17

let texto = prompt("Ingrese un texto");

let encontrado = false;

for (let i = 0; i < texto.length && !encontrado; i++) {
  let letra = texto.charAt(i).toLowerCase();

  switch (letra) {
    case "a":
      document.write(`La primera vocal es <b> a </b> y su posicion es ${i}.`);
      encontrado = true;
      break;

    case "e":
      document.write(`La primera vocal es <b> e </b> y su posicion es ${i}.`);
      encontrado = true;
      break;

    case "i":
      document.write(`La primera vocal es <b> i </b> y su posicion es ${i}.`);
      encontrado = true;
      break;

    case "o":
      document.write(`La primera vocal es <b> o </b> y su posicion es ${i}.`);
      encontrado = true;
      break;

    case "u":
      document.write(`La primera vocal es <b> u </b> y su posicion es ${i}.`);
      encontrado = true;
      break;
  }
}
