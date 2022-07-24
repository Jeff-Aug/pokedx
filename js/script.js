const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumb = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')


const form = document.querySelector('.form')
const input = document.querySelector('.input__search')

const buttonPrev = document.querySelector('.btn-prev')
const buttonNet = document.querySelector('.btn-next')

let searchPokemon = '1'

const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(APIResponse.status ===200){
        return await APIResponse.json()

    }


}

const renderPokemon = async (pokemon)=>{
    pokemonName.innerHTML = 'Loading...'
    pokemonNumb.innerHTML = ''
    const data = await fetchPokemon(pokemon)
    if(data){
        pokemonImage.style.display = 'block'
        pokemonName.innerHTML = `${data.name}`
        pokemonNumb.innerHTML = `${data.id} `
        pokemonImage.src = data['sprites']['versions']['generation-v']
        ['black-white']['animated']['front_default']
        input.value = ''
        searchPokemon = data.id
    }else{
        pokemonImage.style.display = 'none'
        pokemonName.innerHTML = 'Not found :c'
        pokemonNumb.innerHTML = ''
    }
    // console.log(data.name)
}

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    renderPokemon((input.value).toLowerCase())
})

buttonPrev.addEventListener('click', ()=>{
    if(searchPokemon > 1){
        searchPokemon--
        renderPokemon(searchPokemon)
    }
})
buttonNet.addEventListener('click', ()=>{
    searchPokemon++
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)