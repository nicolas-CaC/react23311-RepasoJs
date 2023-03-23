console.clear();


// Desestructuracion en objetos

const objeto = {
    a: 1,
    b: 2,
    c: 3,
    d: 'a',
    e: 'b',
    f: 'c',
    pepe: 'Juana'
}

console.log('valores del objeto:', objeto)

const { a, c, f, pepe } = objeto


const pepes = ({ a, c, f, pepe }) => {
    console.log('valores del objeto:', a, c, f, pepe)
}

pepes(objeto)


// Desestructuración de Arrays

const array = [1, 2, 3, "a", "b", "c", true]
console.log('Array:', array)

const [valor1, valor2, valor3, , valor4] = array

console.log('Desest. Array:', valor1, valor2, valor3, valor4)
