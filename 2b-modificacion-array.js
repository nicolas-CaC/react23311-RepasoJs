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

//================================================

console.clear();

const array2 = [1, 2, 3, 4, 5, 6];
console.log('Array2:', array2);

const slice = array2.slice(2, 4)
console.log('slice:', slice)

const splice = array2.splice(2, 1)
console.log('splice:', splice)

console.log('Array2 AHORA:', array2)
console.log('slice:', slice)
console.log('splice:', splice)


