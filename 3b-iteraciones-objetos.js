console.clear();


const objeto = {
    a1: 1,
    b1: 2,
    a2: 3,
    b2: 4
}

console.log('FOR IN')
for (valor in objeto) {
    console.log('valor en for in:', valor)
}

console.log('FOR OF: Entries')
for (let item of Object.entries(objeto)) {
    console.log('item:', item)
}

console.clear();
console.log('FOR OF Desetructurado')
for ([clave, valor] of Object.entries(objeto)) {
    console.log('clave:', clave)
    console.log('valor:', valor)
}

console.clear();
for (clave of Object.keys(objeto)) {
    console.log('Clave:', clave)
}

for (valor of Object.values(objeto)) {
    console.log('Valor:', valor)
}