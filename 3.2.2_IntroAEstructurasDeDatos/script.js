// Arreglos
const frutas = ['Naranja', 'Mango', 'Pera'];
console.log(frutas);

frutas.push('Fresa');
console.log(frutas);

console.log(`El primer elemento de mi arreglo de frutas es: ${frutas[0]}`);
console.log(`El último elemento de mi arreglo de frutas es: ${frutas[frutas.length - 1]}`);

frutas.pop(); //Este método elimina el ÚLTIMO elemento del arreglo.
console.log(frutas);

frutas.shift(); //Este método elimina el PRIMER elemento del arreglo.
console.log(frutas);

const verduras = ['Zanahoria', 'Jitomate', 'Cebolla'];
// verduras = []; <- Esto no se puede hacer porque cuando una variable es const no se puede reasignar.

// Creamos un arreglo a creando copias de los elementos de otros arreglos.
let alimentosCopias = [[...frutas], [...verduras]];
console.log('Arreglo de arreglos (por copia)');
console.log(alimentosCopias);

// Creamos un arreglo a partir de referencias a otros arreglos.
let alimentos = [frutas, verduras];
console.log('Arreglo de arreglos (por referencia): ');
console.log(alimentos);

verduras.pop(); // Esto sí se puede hacer porque el valor de la variable tiene un método que puede modificarla.

console.log('Arreglos de arreglos después de eliminar un elemento del arreglo de verduras: ');
console.log('Arreglo de arreglos (por referencia): ');
console.log(alimentos);
console.log('Arreglo de arreglos (por copia)');
console.log(alimentosCopias);

// Pilas

// Pila con clase
class Pila{
    
    constructor(){
        this.elementos = [];
    }

    // Método push
    agregar(nuevoElemento){
        this.elementos.push(nuevoElemento);
    }

    // Método pop
    eliminar(){
        if(this.elementos.length != 0){
            this.elementos.pop();
        }
    }

    // Método peek
    // IMPORTANTE: Recordar que:
    //  0    1    2    3    4
    //['A', 'B', 'C', 'D', 'E'] //length = 5
    mostrarUltimoElemento(){
        if(this.elementos.length != 0){
            return this.elementos[this.elementos.length - 1];
        }
        return null;
    }
}

let pilaNavegacionWeb = new Pila();
pilaNavegacionWeb.agregar('www.google.com');
pilaNavegacionWeb.agregar('www.youtube.com');
pilaNavegacionWeb.agregar('www.youtube.com/TaylorSwift');
pilaNavegacionWeb.agregar('www.youtube.com/TaylorSwift/Karma');

console.log(`Estoy en la página de: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); //www.youtube.com/TaylorSwift/Karma
pilaNavegacionWeb.eliminar();
console.log(`Me regrese a la página anterior que es: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); //www.youtube.com/TaylorSwift
pilaNavegacionWeb.eliminar();
console.log(`Me regrese a la página anterior que es: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); //www.youtube.com
pilaNavegacionWeb.eliminar();
console.log(`Me regrese a la página anterior que es: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); // www.google.com
pilaNavegacionWeb.eliminar(); // <- En este momento la pila queda vacía.
console.log(`Me regrese a la página anterior que es: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);

// Pila con arreglo sin clase.
let pilaArreglo = [];
pilaArreglo.push('Hola');
pilaArreglo.pop();
