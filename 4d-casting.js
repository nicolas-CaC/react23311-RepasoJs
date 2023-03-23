console.clear();

const b = 5;
console.log('Valor de b:', b);
console.log(typeof b, '\n');

const a = Boolean(b)
console.log(a)
console.log(typeof a)

const c = '';
console.log('\nValor de c:', c)
console.log(typeof c)

const cToBoolean = Boolean(c)
console.log(cToBoolean)
console.log(typeof cToBoolean)

console.clear();

let d = b;
console.log('Valor de b:', b)
console.log('Valor de d:', d)

d = d.toString();
console.log(d);
console.log(typeof d);

console.clear();

const e = Math.PI
console.log('Valor de e:', e)
console.log('Valor parseInt', parseInt(e))

let f = e.toString()
console.log(f)
console.log('\nValor de f parseado', parseFloat(f))
console.log(typeof parseFloat(f))

const g = false;
console.log(Number(g))