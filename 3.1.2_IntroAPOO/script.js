// Las clases se nombran con la primera letra en mayúscula
class Persona{

    constructor(nuevoNombre, edad, genero, peso){
        this.nombre = nuevoNombre;
        this.edad = edad;
        this.genero = genero;
        this.mejorAmigo = null;
        this.peso = peso;
        this.mascotas = [];
    }

    saludar(){
        //Código del método
        console.log(`Hola, mi nombre es ${this.nombre}`); //template string
    }

    platicar(interlocutor){
        console.log(`Hola ${interlocutor.nombre} mi nombre es ${this.nombre}`);
    }

    agregarMejorAmigo(persona){
        this.mejorAmigo = persona;
        console.log(`Mi nombre es: ${this.nombre} y mi mejor amigo es: ${this.mejorAmigo.nombre}`);
    }

    agregarMascota(mascota){
        this.mascotas.push(mascota);
    }

    mostrarMascotas(){
        console.log(`Mi nombre es: ${this.nombre} y mis mascotas son: `);
        for(let i = 0; i < this.mascotas.length; i++){
            console.log(`Nombre: ${this.mascotas[i].nombre} Especie: ${this.mascotas[i].especie}`);
        }
    }

}

class Mascota{
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
}


let persona1 = new Persona('Malinali', 25, 'Femenino', 40);
persona1.saludar();
console.log(`Nombre: ${persona1.nombre} Edad: ${persona1.edad}`);

let persona2 = new Persona('Ángel', 26, 'Masculino', 70);
persona2.saludar();

let persona3 = new Persona('Iván', 22, 'Masculino', 70);

persona1.platicar(persona2);
persona1.agregarMejorAmigo(persona2);

persona1.agregarMejorAmigo(persona3);

let mascota1 = new Mascota("Bowie", "Gatito");
let mascota2 = new Mascota("Cosa", "Perrito");

persona1.agregarMascota(mascota1);
persona1.agregarMascota(mascota2);

persona1.mostrarMascotas();

persona2.agregarMascota(mascota2);
persona2.mostrarMascotas();

