// PUNTO 3

let textoTotal = '';

while(true){
    const textoIngresado = prompt("Ingrese el texto");

    if(textoIngresado === null || textoIngresado.lenght<=0) {
        break;
    }

    textoTotal = textoTotal + textoIngresado + "-";
}

if(textoTotal.length>0) {
    document.write(`El texto total ingresado es: ${textoTotal} `);
} else {
    document.write("No se ingreso texto");
}

