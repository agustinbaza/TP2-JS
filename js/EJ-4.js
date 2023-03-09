// PUNTO 4 

let numerosTotales = '';

while(true) {

    
    const numerosIngresados = prompt("Ingrese un numero");
     
    
    if(numerosIngresados===null || numerosIngresados.length<=0) {
        break;
    }

    if(isNaN(numerosIngresados)){
        alert("NO ES UN NÚMERO");
        continue;
    }

    numerosTotales = numerosTotales + numerosIngresados + "-";

}

if (numerosTotales.length>0) {
    document.write(`Los números ingresados son: ${numerosTotales}`);
} else {
    document.write("No se ingreso ningún número");
}