console.clear();


function mostrarNumeros() {
    for (let i = 1; i <= 10; i++)
        console.log(i);
}

// const mostrarNumeros = () => {
//     for (let i = 1; i <= 10; i++)
//         console.log(i);
// }

// const mostrarNumeros = function () {
//     for (let i = 1; i <= 10; i++)
//         console.log(i);
// }

// mostrarNumeros()

// (() => {
//     for (let i = 1; i <= 10; i++)
//         console.log(i);
// })();

// const imprimir = (cadena, cadena2 = 'estoy vacío') => console.log(cadena, cadena2)
const imprimir = (...cadenas) => {
    for (let i = 0; i < cadenas.length; i++)
        console.log(cadenas[i])
}

// imprimir('hola', 'como', 'estan')

// imprimir('hola gente')

function* numero() {
    let a = 0
    yield a //0
    a++
    yield a //1
    a++
    yield a //2
}

let contador = numero()

// console.log(contador.next()) //0
// console.log(contador.next()) //1
// console.log(contador.next()) //2
// console.log(contador.next()) //undefined

function* bucle() {

    let x = 0

    while (true) {
        yield x
        x++
    }
}

const objetoGenerador = bucle()

// console.log(objetoGenerador.next())
// console.log(objetoGenerador.next())
// console.log(objetoGenerador.next())
// console.log(objetoGenerador.next())
// console.log(objetoGenerador.next())
// console.log(objetoGenerador.next())

function mostrarCosas(funcion) { funcion() }
mostrarCosas(mostrarNumeros)

// function callback(funcion)