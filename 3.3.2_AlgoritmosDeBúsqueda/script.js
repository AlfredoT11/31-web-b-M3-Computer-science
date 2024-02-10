
// Complejidad O(n)
function busquedaLineal(arreglo, valorABuscar){
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] === valorABuscar){
            return i;
        }
    }
    return -1;
}

// Complejidad O(log2(n))
function busquedaBinaria(arreglo, valorABuscar, inicio, final){

    let posicionMitad = Math.floor((arreglo.length - 1)/2);

    if(arreglo[posicionMitad] != valorABuscar && inicio == final){
        return false;
    }

    if(arreglo[posicionMitad] == valorABuscar){
        return true;
    }else if(valorABuscar > arreglo[posicionMitad]){
        //Me muevo a la derecha
        if(posicionMitad == arreglo.length - 1){
            return false;
        }
        let arregloNuevo = arreglo.slice(posicionMitad + 1, final + 1);
        return busquedaBinaria(arregloNuevo, valorABuscar, 0, arregloNuevo.length - 1);
    }else{
        //Me muevo a la izquierda
        if(posicionMitad == 0){
            return false;
        }
        let arregloNuevo = arreglo.slice(0, posicionMitad);
        return busquedaBinaria(arregloNuevo, valorABuscar, 0, arregloNuevo.length - 1);
    }

}


let arregloPrueba = [10, 8, 13, 24, 32, 54, 0];
let valorABuscar = 54;
let posicionValor = busquedaLineal(arregloPrueba, valorABuscar);
if(posicionValor != -1){
    console.log(`El valor ${valorABuscar} SÍ existe en el arreglo.`)
}else{
    console.log(`El valor ${valorABuscar} NO existe en el arreglo.`)
}


valorABuscar = 15;
posicionValor = busquedaLineal(arregloPrueba, valorABuscar);
if(posicionValor != -1){
    console.log(`El valor ${valorABuscar} SÍ existe en el arreglo.`)
}else{
    console.log(`El valor ${valorABuscar} NO existe en el arreglo.`)
}

arregloPrueba = [0, 8, 10, 13, 24, 32, 54];

valorABuscar = 54;
if(busquedaBinaria(arregloPrueba, valorABuscar, 0, arregloPrueba.length - 1)){
    console.log(`El valor ${valorABuscar} SÍ existe en el arreglo.`)
}else{
    console.log(`El valor ${valorABuscar} NO existe en el arreglo.`)
}

valorABuscar = 15;
if(busquedaBinaria(arregloPrueba, valorABuscar, 0, arregloPrueba.length - 1)){
    console.log(`El valor ${valorABuscar} SÍ existe en el arreglo.`)
}else{
    console.log(`El valor ${valorABuscar} NO existe en el arreglo.`)
}

valorABuscar = 10;
if(busquedaBinaria(arregloPrueba, valorABuscar, 0, arregloPrueba.length - 1)){
    console.log(`El valor ${valorABuscar} SÍ existe en el arreglo.`)
}else{
    console.log(`El valor ${valorABuscar} NO existe en el arreglo.`)
}

// Los primeros 4 dígitos es el año de ingreso del estudiante.
let boletasDeEstudiantes = [2015090154, 2015090156, 2015090254, 2015090354, 2015090454, 2016090544, 2016090600, 2016090714, 2017090754, 2017090800];
let boletaABuscar = 2015090544;

if(busquedaBinaria(boletasDeEstudiantes, boletaABuscar, 0, boletasDeEstudiantes.length - 1)){
    console.log(`El alumno con la boleta ${boletaABuscar} SÍ existe`);
}else{
    console.log(`El alumno con la boleta ${boletaABuscar} NO existe`);
}

boletaABuscar = 2015090100;
if(busquedaBinaria(boletasDeEstudiantes, boletaABuscar, 0, boletasDeEstudiantes.length - 1)){
    console.log(`El alumno con la boleta ${boletaABuscar} SÍ existe`);
}else{
    console.log(`El alumno con la boleta ${boletaABuscar} NO existe`);
}

// Un callback es una función que recibe una otra función como parámetro.
// find y filter son funcionalidades de ES6 (EcmaScript 6).
boletaABuscar = 2017090754;
if(boletasDeEstudiantes.find( (valor) =>  valor === boletaABuscar  ) == undefined){
    console.log(`El alumno con la boleta ${boletaABuscar} NO existe`);
}else{
    console.log(`El alumno con la boleta ${boletaABuscar} SÍ existe`);
}

let estudiantesConBoleta2017 = boletasDeEstudiantes.filter( (valor) =>  valor > 2017000000 );
let numeroEstudiantesConBoleta2017 = estudiantesConBoleta2017.length;
console.log(`Estudiantes con boleta 2017: ${numeroEstudiantesConBoleta2017}`);

let estudiantesConBoleta2016 = boletasDeEstudiantes.filter( (valor) =>  valor >= 2016000000 && valor < 2017000000);
let numeroEstudiantesConBoleta2016 = estudiantesConBoleta2016.length;
console.log(`Estudiantes con boleta 2016: ${numeroEstudiantesConBoleta2016}`);
console.log(estudiantesConBoleta2016);




