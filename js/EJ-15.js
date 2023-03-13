// PUNTO 15 

let texto = prompt("Ingrese el texto");

let contador = 0;

for (let i=0; i < texto.length; i++) {

    let letra = texto.charAt(i).toLowerCase();
     
    if(letra ==="a" || letra ==="e" || letra ==="i" || letra ==="o" || letra ==="u" ) {
       contador++;
    }
}
    document.write("Número de vocales:" + " " + contador);



