// setTimeout(() => {
//     console.log('me ejecuté luego de cinco segundos')
// }, 5000)

// console.log('me muestro')

// setInterval(() => {
//     console.log('me repito cada 2 segundos')
// }, 2000)

let promesa = (respuesta) => new Promise(function (resuelta, rechazada) {
    respuesta
        ? resuelta('Promesa resuelta')
        : rechazada('Promesa rechazada')
})

console.log('Promesa con true:', promesa(true))

promesa = (value) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            value
                ? resolve('Promesa resuelta')
                : reject('Promesa rechazada')
        }, 2000))

// console.log('Promesa con setTimeout en true:', promesa(true))

promesa(true)
    .then(rta => console.log(rta))
    .catch(err => console.log(err))

promesa(false)
    .then(rta => console.log(rta))
    .catch(err => console.log(err))

promesa(true)
    .then(rta => console.log(rta))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado'))

