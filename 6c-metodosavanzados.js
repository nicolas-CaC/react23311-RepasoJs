console.clear();


const a = [0, 1, 2, 'a', true]
const b = [3, 2, 4, 5, 1]
const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
let d = [];

a.forEach(value => d.push(value * 2))
// console.log({ d })

const map = a.map(value => value * 2)
// console.log({ map })

const find = a.find(value => value === 2)
// console.log({ find })

const filter = a.filter(value => value == 1)
// console.log({ filter })

// const reduce = a.reduce((accum, value, index, array) => {
//     console.log(`acumulador: ${accum} - valor: ${value} - indice: ${index} - arreglo: ${array}`)
//     return accum + value
// }, 0)
const reduce = a.reduce((accum, value) => accum + value, 0)
// console.log({ reduce })

// at
// console.log(a.at(1))
// console.log(a.at(-1))

// console.log(b.sort())
// console.log(b)

// const sortMaxMin = b.sort((a, b) => a < b ? 1 : -1)
// console.log(sortMaxMin)

// const sortMinMax = c.sort((a, b) => a > b ? 1 : -1)
// console.log(sortMinMax)

const some = a.some(value => value > 1)
// console.log(some)

const every = a.every(value => typeof value != 'object')
// console.log(every)

const concat = a.concat(b)
// console.log(concat)

const includes = a.includes(1)
// console.log({ includes })

const join = a.join('')
// console.log(join)
// console.log(typeof join)

let hola = 'Hola Mundo'
const split = hola.split('o')
// console.log({ split })

const from = Array.from('hola')
// console.log({ from })

const index = a.indexOf('a')
// console.log(index)

const findIndex = a.findIndex(value => value > 0)
// console.log({ findIndex })

// console.log(a.fill(5, 2))
// console.log(c.fill(5, 1, 3))

// a.push('c')
// console.log({ a })

// a.pop()
// console.log({ a })

// a.shift()
// console.log({ a })

// a.unshift('3')
// console.log({ a })

const slice = a.slice(1, 3)
// console.log(slice)

// a.reverse()
// console.log(a)

// a.splice(2, 2, 'sol')
// console.log({ a })

const last = a.lastIndexOf(2)
// console.log(last)

const x = [1, 2, 3, ['a', 'b', 'c']]
// console.log(x.flat())

console.log(Array.isArray(a))

