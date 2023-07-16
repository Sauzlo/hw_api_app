import React from 'react';

function PokeSelector({pokemon, onPokemonSelected}){

    const pokeOptions = pokemon.map((poke) => {
        return (
            <option key={poke.url} value={poke.url}>{poke.name}</option>
        )
    })

    const handleChange = event => {
        onPokemonSelected(event.target.value)
    }


    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" disabled>Choose a Pokemon</option>
            {pokeOptions}
        </select>
    )
}

export default PokeSelector;