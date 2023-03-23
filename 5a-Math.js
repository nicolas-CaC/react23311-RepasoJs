console.clear();

const pi = Math.PI
console.log(pi)

const x = 3.2
const y = 3.7

const round = Math.round(pi)
console.log(round)
console.log(Math.round(x))
console.log(Math.round(y))
console.log('\n')

const ceil = Math.ceil(pi)
console.log(ceil)
console.log(Math.ceil(x))
console.log(Math.ceil(y))
console.log('\n')

const floor = Math.floor(pi)
console.log(floor)
console.log(Math.floor(x))
console.log(Math.floor(y))
console.log('\n')

const trunc = Math.trunc(pi)
console.log(trunc)
console.log(Math.trunc(x))
console.log(Math.trunc(y))
console.log('\n')

console.clear();

const random = Math.random()
console.log(random)

console.clear();

const hasta10 = random * 10
console.log('hasta 10:', Math.trunc(hasta10))

console.clear();

let max = 30
let min = 10

const del10al30 = random * (max - min) + min
console.log('Valor random del 10 al 30:', Math.trunc(del10al30))