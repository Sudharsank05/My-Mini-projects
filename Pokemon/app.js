const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

async function loadPokemon() {
    const promises = [];

    for (let i = 1; i <= 151; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }

    const allPokemon = await Promise.all(promises);

    allPokemon.forEach((data, index) => {
        const i = index + 1;

        const pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');

        const label = document.createElement('span');
        label.innerText = `#${i}`;

        const nameLabel = document.createElement('p');
        nameLabel.innerText = data.forms[0].name;

        const newImg = document.createElement('img');
        newImg.src = `${baseURL}${i}.png`;

        pokemon.appendChild(newImg);
        pokemon.appendChild(label);
        pokemon.appendChild(nameLabel);
        container.appendChild(pokemon);

        pokemon.addEventListener('click', () => {
            alert(`You clicked ${nameLabel.innerText}`);
        });
    });
}

loadPokemon();
