console.clear();

function contimeout() {
    setTimeout(() => {
        console.log('soy timeout')
    }, 1000);
}

contimeout()

function conPromesa() {
    console.log('con promesa:', new Promise(function (resolve) {
        setTimeout(() => {
            console.log('promesa: true')
        }, 1000);
    }))
}
// conPromesa()

async function conAsync() {
    console.log('con promesa:',
        await new Promise(function (resolve) {
            setTimeout(() => {
                console.log('promesa: true')
            }, 1000);
        }))
}

conAsync()

