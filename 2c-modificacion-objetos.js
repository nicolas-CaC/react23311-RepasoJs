console.clear();

const objeto = { a: 1, b: 2, c: 3 };
console.log('Objeto', objeto);
const objetoCopia = objeto;
console.log('ObjetoCopia', objetoCopia);
const objetoSpread = { ...objeto };
console.log('ObjetoSpread', objetoSpread);

console.log(objeto.a)
console.log(objeto['b'])

objeto.d = 4;
console.log('Objeto', objeto);
console.log('ObjetoCopia', objetoCopia);
console.log('ObjetoSpread', objetoSpread);

delete objeto.d
delete objeto.a
console.log('Objeto Alterado:', objeto)

const objeto2 = { w: true, x: 1, y: 2, z: 'a' };
const objeto3 = Object.assign(objeto, objeto2);
console.log('Objeto fusión:', objeto3);
