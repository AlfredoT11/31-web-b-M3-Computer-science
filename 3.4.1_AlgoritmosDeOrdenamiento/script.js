function ordenamientoBurbuja(arreglo){
    for(let i = 0; i <= arreglo.length; i++){
        for(let j = 0; j < arreglo.length - 1; j++){
            if(arreglo[j] > arreglo[j + 1]){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;
            }
        }
    }
}


let arregloNumeros = [2, 10, 9, 10, 13, 16, 20, 15, 0];

console.log("Arreglo sin ordernar");
console.log([...arregloNumeros]);

// sort() convierte los valores a cadenas y ordena alfabeticamente
arregloNumeros.sort();

console.log("Arreglo ordenado (alfabeticamente)");
console.log(arregloNumeros);


let arregloNumeros2 = [2, 10, 9, 10, 13, 16, 20, 15];

console.log("Arreglo sin ordernar");
console.log([...arregloNumeros2]);

// sort() convierte los valores a cadenas y ordena alfabeticamente
arregloNumeros2.sort((a, b) => a - b);


console.log("Arreglo ordenado");
console.log(arregloNumeros2);

let arregloNumeros3 = [2, 10, 9, 10, 13, 16, 20, 15, 0]; 

console.log("Arreglo sin ordernar");
console.log([...arregloNumeros3]);

ordenamientoBurbuja(arregloNumeros3);

console.log("Arreglo ordenado (con burbuja)");
console.log(arregloNumeros3);


// Ejemplo de e.preventDefault()
document.getElementById("fileButton").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Cancelé la operación básica");
});