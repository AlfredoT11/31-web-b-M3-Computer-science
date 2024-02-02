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

/*
Hacer una función que reciba como parámetros una pila, y un número.

La función debe retornar tantos elementos como diga el número (segundo parámetro).

Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’]
*/


function eliminarElementos(pila, elementosAEliminar){
    for(let i = 0; i < elementosAEliminar; i++){
        if(pila.mostrarUltimoElemento() == null){
            console.log(`La pila ya está vacía`);
            return;
        }
        pila.eliminar();
    }
}

let pilaEjercicio = new Pila();
pilaEjercicio.agregar('www.google.com');
pilaEjercicio.agregar('www.youtube.com');
pilaEjercicio.agregar('www.youtube.com/TaylorSwift');
pilaEjercicio.agregar('www.youtube.com/TaylorSwift/Karma');

eliminarElementos(pilaEjercicio, 3);
console.log(`Después de eliminar los 3 elementos, nos quedamos con: ${pilaEjercicio.mostrarUltimoElemento()}`);

eliminarElementos(pilaEjercicio, 2);

// Cola
class Cola{

    constructor(){
        this.elementos = [];
    }

    //enqueue
    agregarElemento(nuevoElemento){
        this.elementos.unshift(nuevoElemento);
    }

    //queue
    eliminarElemento(){
        if(this.elementos.length > 0){
            this.elementos.pop();
        }
    }

    //back
    // Ultimo (que llegó)      Inicio (primero que llegó)
    //  0    1    2    3    4    5
    //['A', 'B', 'C', 'D', 'E', 'F'] //length = 5
    mostrarUltimoElemento(){
        if(this.elementos.length > 0){
            return this.elementos[0];
        }
        return null;
    }

    mostrarPrimerElemento(){
        if(this.elementos.length > 0){
            return this.elementos[this.elementos.length - 1];
        }
        return null;

    }

}

let filaDeBoletos = new Cola();
filaDeBoletos.agregarElemento('Andrés');
filaDeBoletos.agregarElemento('Claudio');
filaDeBoletos.agregarElemento('Luis');
filaDeBoletos.agregarElemento('Yaset');

console.log(`La primera persona en llegar fue: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en llegar fue: ${filaDeBoletos.mostrarUltimoElemento()}`);

console.log(`${filaDeBoletos.mostrarPrimerElemento()} ya tiene su boleto.`);
filaDeBoletos.eliminarElemento();
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);

filaDeBoletos.agregarElemento('Arturo');
console.log('LLegó una persona a la fila');
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);


console.log(`${filaDeBoletos.mostrarPrimerElemento()} ya tiene su boleto.`);
filaDeBoletos.eliminarElemento();
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);

console.log(`${filaDeBoletos.mostrarPrimerElemento()} ya tiene su boleto.`);
filaDeBoletos.eliminarElemento();
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);

console.log(`${filaDeBoletos.mostrarPrimerElemento()} ya tiene su boleto.`);
filaDeBoletos.eliminarElemento();
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);

console.log(`${filaDeBoletos.mostrarPrimerElemento()} ya tiene su boleto.`);
filaDeBoletos.eliminarElemento();
console.log(`El siguiente en la fila es: ${filaDeBoletos.mostrarPrimerElemento()}`);
console.log(`La última persona en la fila es: ${filaDeBoletos.mostrarUltimoElemento()}`);

/*

Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, 
llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a 
todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.


Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.


Cola: [ 
    { user:‘User1’, ticket:true },
    { user:‘User2’, ticket:true },
    { user:‘User3’, ticket:false },
    { user:‘User4’, ticket:true },
    { user:‘User5’, ticket:false },
    { user:‘User6’, ticket:false },
    { user:‘User7’, ticket:true },
    { user:‘User8’, ticket:true },
    { user:‘User9’, ticket:true },
    { user:‘User10’, ticket:false },
    { user:‘User11’, ticket:true },
];


*/