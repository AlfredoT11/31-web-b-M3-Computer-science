//Superclase o Clase padre
class Pokemon{
    
    constructor(nombre, nivelAtaque, velocidad, nivelDeVida){
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.velocidad = velocidad;
        this.nivelDeVida = nivelDeVida;
    }

    atacar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a otro pokemon`);
        console.log(`${this.nombre} tiene un ataque de ${this.nivelAtaque} y un nivel de vida de ${this.nivelDeVida}`);
        console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida antes del ataque: ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.nivelAtaque; // pokemonAtacado.nivelDeVida = pokemonAtacado.nivelDeVida - this.nivelAtaque;
        console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida después del ataque: ${pokemonAtacado.nivelDeVida}`);
        console.log(`Nivel de vida de ${this.nombre} después de atacar ${this.nivelDeVida}`);
    }

    huir(){
        console.log(`${this.nombre} está huyendo`);
    }

}

// Subclase o Clase hija
class PokemonFuego extends Pokemon{
    constructor(nombre, nivelAtaque, velocidad, nivelDeVida, colorDeFlama){
         //Llamando al constructor de la clase padre. Los parámetros tienen que seguir el mismo orden que el constructor de la clase padre.
        super(nombre, nivelAtaque, velocidad, nivelDeVida);
        this.colorDeFlama = colorDeFlama; //Estamos agregando un atributo específico para esta clase.
    }

    //Este método es específico de esta clase.
    quemar(pokemonAtacado){

        let numeroTurnos = Math.round(Math.random() * 4);

        for(let i = 0; i < numeroTurnos; i++){
            console.log(`${this.nombre} está QUEMANDO a otro pokemon`);
            console.log(`${this.nombre} tiene un ataque de ${this.nivelAtaque} y un nivel de vida de ${this.nivelDeVida}`);
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida antes del ataque: ${pokemonAtacado.nivelDeVida}`);
            pokemonAtacado.nivelDeVida -= (this.nivelAtaque * 1.2); // pokemonAtacado.nivelDeVida = pokemonAtacado.nivelDeVida - this.nivelAtaque;
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida después del ataque: ${pokemonAtacado.nivelDeVida}`);
            console.log(`Nivel de vida de ${this.nombre} después de atacar ${this.nivelDeVida}`);
        }
    }

    //Aquí está la sobreescritura del método atacar de la clase padre.
    atacar(pokemonAtacado){
        let numeroTurnos = Math.round(Math.random() * 4);

        for(let i = 0; i < numeroTurnos; i++){
            console.log(`${this.nombre} está QUEMANDO a otro pokemon`);
            console.log(`${this.nombre} tiene un ataque de ${this.nivelAtaque} y un nivel de vida de ${this.nivelDeVida}`);
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida antes del ataque: ${pokemonAtacado.nivelDeVida}`);
            pokemonAtacado.nivelDeVida -= (this.nivelAtaque * 1.2); // pokemonAtacado.nivelDeVida = pokemonAtacado.nivelDeVida - this.nivelAtaque;
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida después del ataque: ${pokemonAtacado.nivelDeVida}`);
            console.log(`Nivel de vida de ${this.nombre} después de atacar ${this.nivelDeVida}`);
        }
    }

}

// Subclase o Clase hija
class PokemonHielo extends Pokemon{
    constructor(nombre, nivelAtaque, velocidad, nivelDeVida, temperaturaDeCongelamiento){
        //Llamando al constructor de la clase padre. Los parámetros tienen que seguir el mismo orden que el constructor de la clase padre.
        super(nombre, nivelAtaque, velocidad, nivelDeVida);
        this.temperaturaDeCongelamiento = temperaturaDeCongelamiento;
    }

    //Este método es específico de esta clase
    congelar(pokemonAtacado){
        let numeroTurnos = Math.round(Math.random() * 4);

        for(let i = 0; i < numeroTurnos; i++){
            console.log(`${this.nombre} está CONGELANDO a otro pokemon`);
            console.log(`${this.nombre} tiene un ataque de ${this.nivelAtaque} y un nivel de vida de ${this.nivelDeVida}`);
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida antes del ataque: ${pokemonAtacado.nivelDeVida}`);
            pokemonAtacado.nivelDeVida -= (this.nivelAtaque * 1.5); // pokemonAtacado.nivelDeVida = pokemonAtacado.nivelDeVida - this.nivelAtaque;
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida después del ataque: ${pokemonAtacado.nivelDeVida}`);
            console.log(`Nivel de vida de ${this.nombre} después de atacar ${this.nivelDeVida}`);
        }
    }

    //Aquí está la sobreescritura del método atacar de la clase padre.
    atacar(pokemonAtacado){
        let numeroTurnos = Math.round(Math.random() * 4);

        for(let i = 0; i < numeroTurnos; i++){
            console.log(`${this.nombre} está CONGELANDO a otro pokemon`);
            console.log(`${this.nombre} tiene un ataque de ${this.nivelAtaque} y un nivel de vida de ${this.nivelDeVida}`);
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida antes del ataque: ${pokemonAtacado.nivelDeVida}`);
            pokemonAtacado.nivelDeVida -= (this.nivelAtaque * 1.5); // pokemonAtacado.nivelDeVida = pokemonAtacado.nivelDeVida - this.nivelAtaque;
            console.log(`${pokemonAtacado.nombre} está siendo atacado. Nivel de vida después del ataque: ${pokemonAtacado.nivelDeVida}`);
            console.log(`Nivel de vida de ${this.nombre} después de atacar ${this.nivelDeVida}`);
        }
    }
}

class Combate{
    constructor(pokemonA, pokemonB){
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;
    }

    //instanceof nos permite verificar la clase de un objeto.
    pokemonAAtaca(){
        this.pokemonA.atacar(this.pokemonB);
    }

    pokemonBAtaca(){
        this.pokemonB.atacar(this.pokemonA);
    }

}

let pokemon1 = new Pokemon('Pikachu', 50, 20, 200);
let pepito = new PokemonFuego('Charmander', 60, 15, 150, 'Naranja');
let hielin = new PokemonHielo('Lapras', 80, 17, 300, -50);

pokemon1.atacar(pepito);

//hielin.quemar(); Esto no es posible ya que hielin es un objeto del tipo PokemonHielo y esa clase no cuenta con ese método.

console.log('---------------------------------------------------------------------------------------');
console.log(`Comenzando combate`);
let combate = new Combate(pepito, hielin);
combate.pokemonAAtaca();
combate.pokemonBAtaca();





