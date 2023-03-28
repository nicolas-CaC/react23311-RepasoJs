console.clear();

const a = new Date('12-09-01')
console.log(a)

console.log(a.toLocaleString())
console.log(a.toString())

console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())

const b = new Date(2002, 8, 23)
console.log(b)
console.log(b.getFullYear())
console.log(b.getMonth())
console.log(b.getDate())

const c = new Date();
console.log({ c })
console.log(c.toLocaleString())
console.log(c.getTime())
console.log(c.getHours())
console.log(c.getMinutes())
console.log(c.getSeconds())
console.log(c.getUTCMilliseconds())
console.log(c.getUTCHours())

const nacimiento = new Date(2000, 01, 01)
console.log('Nací el', nacimiento.toLocaleDateString())
console.log('Han pasado', c.getFullYear() - nacimiento.getFullYear(), 'años desde esa fecha')

const d = new Date().toTimeString()
console.log('hora actual:', d)
