console.clear();


// Objetos

const objeto = {
    numero: 23,
    nombre: 'Juan',
    booleano: true
}

function Objeto(numero, cadena, booleano) {
    this.numero = numero
    this.nombre = cadena
    this.booleano = booleano
}

console.log(objeto)
console.log('El nombre es', objeto.nombre)







class Clase {

    static id = 0
    static arrayNombres = []
    #nombre

    constructor(numero, cadena, booleano) {
        this.numero = numero
        this.#nombre = cadena
        this.booleano = booleano
        this.id = ++Clase.id
        Clase.arrayNombres.push(cadena)
    }

    get getNombre() {
        return this.#nombre
    }

    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    sumarDos() {
        return this.numero + 2
    }

    sumarCinco = () => this.numero + 5

    sumarDiez = (numero) => numero + 10

    static sumarTreinta = (numero) => console.log(numero + 30)
}



console.log('Static Id:', Clase.id)


// Instancias

const clase1 = new Clase(23, 'Juan', true)

console.log('Edad:', clase1.numero)
// console.log('Nombre:', clase1.nombre)
console.log('Nombre:', clase1.getNombre)

clase1.setNombre = 'Pedro'
console.log(clase1.getNombre)

console.log('sumarDos:', clase1.sumarDos())
console.log('sumarCinco:', clase1.sumarCinco())

console.log('sumarDiez:', clase1.sumarDiez(15))

console.log(clase1.id)
console.log('Static Id:', Clase.id)

const clase2 = new Clase(37, 'Tomas', false)
console.log('Id clase1:', clase1.id)
console.log('Id clase2:', clase2.id)
console.log('Static Id:', Clase.id)

console.log('Static Array:', Clase.arrayNombres)

Clase.sumarTreinta(17)