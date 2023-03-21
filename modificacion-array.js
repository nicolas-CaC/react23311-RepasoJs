console.clear();

const array = [1, 2, 3]
console.log(array)

const arrayCopia = array
console.log(arrayCopia)

const arraySpread = [...array]
console.log(arraySpread)

console.log(array[3])
array[3] = 4
console.log(array[3])
array.push(5)
console.log('array:', array)

console.log('arrayCopia:', arrayCopia)
console.log('arraySpread:', arraySpread)
