const objeto = { a: 1, b: 2, c: 3 }

const stringify = JSON.stringify(objeto, 0, 2)
console.log(stringify)

console.log('\n')

const parsed = JSON.parse(stringify)
console.log(parsed)