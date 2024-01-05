import heroes, { owners } from '../data/heroes';
// fi nd
export const getHeroeById = (id) =>  heroes.find( (heroe) => heroe.id === id);

//console.log( getHeroeById(3) );
// filter
export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(owners)

