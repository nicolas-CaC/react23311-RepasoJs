console.clear();

const array = [1, 2, 'a', 4, 5, 6]
// console.log('array:', array)

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


//
console.clear();

console.log('For In')
for (let index in array) {
    console.log('valor for in:', array[index])
}

console.clear();


console.log('For of')
for (let valor of array) {
    console.log('valor for of:', valor)
}


console.clear();

console.log('while')
let i = 0;
while (i < 10) {
    console.log('i en while:', ++i)
}


//
console.clear();
console.log('do')

i = 10;

do {
    console.log('i en do:', i)
    i++
} while (i < 10)


//
console.clear();
console.log('Switch')

i = 'd';

switch (i) {
    case 'a':
        console.log('soy una a');
        break;
    case 'b':
        console.log('soy una b');
        break;
    case 'c':
        console.log('soy una c');
        break;
    default:
        console.log('Soy otra letra');
        break;
}