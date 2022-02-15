import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => <Pokemon key={pokemon._id} pokemon={pokemon}/>)}
    </div>
  );
}
