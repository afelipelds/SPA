import getHash from '../utils/get-hash'
import getData from '../utils/get-data'

const Character = async () => {
    const id = getHash()
    const character = await getData(id)
    console.log('character',character)
    const view = `
        <div class="Characters-inner" id="character-${character.id}">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.image}">
                <h2>${character.name}</h2>
            </article>
            <article className="Characters-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>  
                <h3>Las Location: <span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;