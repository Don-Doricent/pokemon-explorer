// Get HTML elements first
const searchInput = document.getElementById('searchInput');
const generateButton = document.getElementById('generateButton');
const randomGenerate = document.getElementById('randomGenerate');
const controls = document.querySelector('.controls');
const pokemonDisplay = document.getElementById('pokemonDisplay');


const typeColors = {
    normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
    // had to google this 
  };
  

// API fetch framework

// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/';



generateButton.addEventListener('click', () => {
    const fullUrl = apiUrl + 'pokemon/' + searchInput.value.toLowerCase();
    fetch(fullUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const types = data.types.map(typeInfo => typeInfo.type.name).join(' / ')
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(' / ')
    const moves = data.moves.slice(0, 4).map(moveInfo => moveInfo.move.name).join(' / ');
    const mainType = data.types[0].type.name;
    document.body.style.backgroundColor = typeColors[mainType] || 'white';
    console.log(data);
    pokemonDisplay.innerHTML = `
    <h2>${data.name}</h2>
    <img src = "${data.sprites.front_default}" alt = "${data.name}">
    <p>HP:  ${data.stats[0].base_stat}</p>
    <p>Type: ${types}</p>
    <p>abilities:  ${abilities}</p>
    <p>Base Experience:  ${data.base_experience}</p>
    <p>Moves:  ${moves}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

randomGenerate.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 898) + 1;
    const randomUrl = apiUrl + 'pokemon/' + randomNumber;
    fetch(randomUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const types = data.types.map(typeInfo => typeInfo.type.name).join(' / ')
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(' / ')
    const moves = data.moves.slice(0, 4).map(moveInfo => moveInfo.move.name).join(' / ');
    const mainType = data.types[0].type.name;
    document.body.style.backgroundColor = typeColors[mainType] || 'white';
    console.log(data);
    pokemonDisplay.innerHTML = `
    <h2>${data.name}</h2>
    <img src = "${data.sprites.front_default}" alt = "${data.name}">
    <p>HP:  ${data.stats[0].base_stat}</p>
    <p>Type: ${types}</p>
    <p>abilities:  ${abilities}</p>
    <p>Base Experience:  ${data.base_experience}</p>
    <p>Moves:  ${moves}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });


});