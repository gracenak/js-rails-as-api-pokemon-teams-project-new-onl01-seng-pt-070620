const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')

document.addEventListener("DOMContentLoaded", function() {
    console.log('Loaded!')
    getTrainers()
    // renderPokemon()
})

function getTrainers() {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainers => {
        console.log(trainers)
    trainers.forEach(trainer => 
    renderCard(trainer))
    })
}


function renderCard(trainer) {
    main.innerHTML += `
    <div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
    <button data-trainer-id=${trainer.id}>Add Pokemon</button>
    <ul>
        ${trainer.pokemons.map( pokemon => {
        return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
    }).join('')}
    </ul>
  </div>
  `
      // const div = document.createElement('div')
    // const p = document.createElement('p')
    // const button = document.createElement('button')
    // const ul = document.createElement('ul')

    // div.setAttribute("class", "card")
    // div.setAttribute("data-set", trainer.id)

    // p.innerHTML = trainer.name

    // button.setAttribute("data-trainer-id", trainer.id)
    // button.innerHTML = "Add Pokemon"

    // div.appendChild(p)
    // div.appendChild(button)
    // div.appendChild(ul)

    // main.appendChild(div)

    // trainer.pokemons.forEach(pokemon =>
    //     renderPokemon(pokemon))
}

const addButton = document.querySelector('button')
addButton.addEventListener('click', function(e){
    createPokemon(e)

})

const releaseButton = document.querySelector('.release')
releaseButton.addEventListener('click', function(e) {
    releasePokemon(e)
})



function createPokemon() {

}

function releasePokemon() {
    
}






