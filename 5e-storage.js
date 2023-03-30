// localStorage.setItem('clave', '1')
sessionStorage.setItem('clave2', 2)

let local = localStorage.getItem('clave')
// console.log(typeof local)

let session = sessionStorage.getItem('clave2')
// console.log(typeof session)

// console.log(sessionStorage.key(0))

// console.log('local', localStorage.length)
// console.log('session', sessionStorage.length)

localStorage.clear()

if (!local) { localStorage.setItem('clave', '1') }

if (local) { localStorage.setItem('clave', '3') }

