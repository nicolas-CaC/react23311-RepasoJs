console.clear();

let a = 4

if (a === '4') {
    console.log('a es igual al string 4')
} else {
    console.log('a no es igual al string 4')
}

if (a == '4') {
    console.log('ahora a es igual al string 4')
} else {
    console.log('ahora a no es igual al string 4')
}

if (a === '4') {
    console.log('En modo estricto a es igual al string 4')
} else if (a == '4') {
    console.log('En modo no estricto a es igual al string 4')
} else {
    console.log('a no es igual a nada')
}

if (a === 3)
    console.log('a es igual a 3')

if (a === 4)
    console.log('a es igual a 4')

if (a === 5)
    console.log('a es igual a 5')

function modificarValor(item) {

    if (typeof item != 'number') return;

    console.log(item, 'es un numero')
}

modificarValor(a)

console.clear();

const a1 = 20;

if (a1 === 21) console.log('da 21')
if (a1 === 20) console.log('da 20')
if (a1 === 19) console.log('da 19')

a1 === 21 && console.log('da 21')
a1 === 20 && console.log('&& da 20')
a1 === 19 && console.log('da 19')

console.clear();

const val1 = null;
const val2 = undefined;
const val3 = NaN;
const val4 = 1;
const val5 = 2;

const valOR = val1 || val2 || val3 || val4 || val5;
console.log('valor de valOR', valOR);

const valNC = val1 ?? val2 ?? val3 ?? val4 ?? val5;
console.log('valor de valNC', valNC)

console.log('tipo val1', typeof val1, Boolean(val1))
console.log('tipo val2', typeof val2, Boolean(val2))
console.log('tipo val3', typeof val3, Boolean(val3))
console.log('tipo val4', typeof val4, Boolean(val4))
console.log('tipo val5', typeof val5, Boolean(val5))

const val6 = []
const val7 = {}

console.log('tipo val6', typeof val6, Boolean(val6))
console.log('tipo val7', typeof val7, Boolean(val7))
