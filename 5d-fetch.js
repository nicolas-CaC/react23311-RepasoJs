const url = 'https://pokeapi.co/api/v2/pokemon/haunter'
const datosFetch = fetch(url)
// console.log(datosFetch)

fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const img = document.getElementById('pokemon')
        img.src = `${data.sprites.other['official-artwork'].front_default}`
    })

async function dameMiPokemon(poke) {
    try {
        let imagen;
        const urlCustom = `https://pokeapi.co/api/v2/pokemon/${poke}`

        const promesa = await fetch(urlCustom)
        const pokemon = await promesa.json()
        const sprite = pokemon.sprites.other['official-artwork'].front_default

        imagen = document.createElement('img')
        imagen.src = sprite
        imagen.width = 400

        document.getElementById('pokemones').append(imagen)
    }
    catch (err) {
        console.log('Hubo problemas al traer la información')
    }
    finally {
        console.log('terminamos')
    }
}

dameMiPokemon('charizard')
dameMiPokemon('gengar')
dameMiPokemon('farfetchd')
dameMiPokemon('ditto')
dameMiPokemon('bulbasaur')