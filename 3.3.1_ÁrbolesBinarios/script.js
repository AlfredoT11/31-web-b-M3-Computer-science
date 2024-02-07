class Nodo{
    
    constructor(valor){
        this.valor = valor;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }

}

class ArbolBinario{

    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        if(this.raiz == null){
            let nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        }else{
            let nodoActual = this.raiz;

            while(true){
                //Preguntar si me muevo a la izquierda o a la derecha.

                //Me muevo a la izquierda
                if(valor <= nodoActual.valor){

                    // Preguntamos si ya hay un hijo izquierdo.
                    if(nodoActual.hijoIzquierdo == null){
                        //No hay hijo izquierdo, entonces, el nuevo nodo se agrega aquí.
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.hijoIzquierdo = nuevoNodo;
                        return;
                    }else{
                        //Ya hay un hijo izquierdo.
                        nodoActual = nodoActual.hijoIzquierdo;
                    }
                //Me muevo a la derecha
                }else{
                    if(nodoActual.hijoDerecho == null){
                        //No hay hijo derecho, entonces, el nuevo nodo se agrega aquí.
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.hijoDerecho = nuevoNodo;
                        return;
                    }else{
                        //Ya hay un hijo derecho.
                        nodoActual = nodoActual.hijoDerecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;
        if(nodoActual == null){
            return false;
        }

        while(nodoActual != null){
            //Este es el caso cuando el valor que busco sí existe en el árbol
            if(nodoActual.valor == valor){
                return true;
            }

            if(valor <= nodoActual.valor){
                //Me muevo a la izquierda
                nodoActual = nodoActual.hijoIzquierdo;

            }else{
                //Me muevo a la derecha
                nodoActual = nodoActual.hijoDerecho;
            }

        }
        return false;
    }

    //Este recorrido primero va a la izquierda, luego el nodo padre y luego se mueve a la derecha.
    inorden(nodo, arregloValores){

        if(nodo != null){
            //Movimiento a la izquierda
            this.inorden(nodo.hijoIzquierdo, arregloValores);

            //Padre
            //console.log(nodo.valor);
            arregloValores.push(nodo.valor);

            //Movimiento a la derecha
            this.inorden(nodo.hijoDerecho, arregloValores);
        }
    }

}

let numeros = [5, 8, 1, 9, 10, 0, 2, 5, 3];
const arbolBinario = new ArbolBinario();

for(let i = 0; i < numeros.length; i++){
    arbolBinario.insertar(numeros[i]);
}

if(arbolBinario.buscar(9)){
    console.log(`El valor 9 SÍ está en el árbol binario`);
}else{
    console.log(`El valor 9 NO está en el árbol binario`);
}

if(arbolBinario.buscar(11)){
    console.log(`El valor 11 SÍ está en el árbol binario`);
}else{
    console.log(`El valor 11 NO está en el árbol binario`);
}

console.log('Arreglo original: ');
console.log(numeros);
console.log('Inorden: ');
const recorridoInorden = [];
arbolBinario.inorden(arbolBinario.raiz, recorridoInorden);
console.log(recorridoInorden);

//Recursividad
/* 
n = 3
fibonacci(3)
    fibonacci(3 - 1)                                    + fibonacci(3 - 2)
    fibonacci(2)                                        + fibonacci(1)
        fibonacci(2 - 1) + fibonacci(2 - 2 = 0)                 fibonaccio(1 - 1) + fibonacci(1 - 2 = -1)
*/


function fibonacci(n){
    
    //Condición de paro
    if(n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let serieFibonacci = [];
for(let i = 0; i < 15; i++){
    serieFibonacci.push(fibonacci(i));
}

console.log(`Serie de fibonacci: ${serieFibonacci}`);


let arbolLetras = new ArbolBinario();
let letras = ['B', 'D', 'F', 'H', 'K', 'L', 'A'];
for(let i = 0; i < letras.length; i++){
    arbolLetras.insertar(letras[i]);
}

let letrasOrdenadasInorden = [];
arbolLetras.inorden(arbolLetras.raiz, letrasOrdenadasInorden);
console.log(letrasOrdenadasInorden);

let arbolNombres = new ArbolBinario();
let nombres = ['Mario', 'Tania', 'Claudio', 'Arturo', 'Yaset', 'Yenilet', 'Luis'];
for(let i = 0; i < nombres.length; i++){
    arbolNombres.insertar(nombres[i]);
}

let nombresOrdenadasInorden = [];
arbolNombres.inorden(arbolNombres.raiz, nombresOrdenadasInorden);
console.log(nombresOrdenadasInorden);
