console.clear();

const a = 1;
const b = 'a';
const c = false;

if (c) console.log('es true', a)
else console.log(b)

c
    ? console.log('es true en ternario', a)
    : console.log(b);

console.log(c ? `es true ${a}` : b)

const d = c ? 10 : 25
console.log(d)