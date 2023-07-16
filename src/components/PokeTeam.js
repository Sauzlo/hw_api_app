import React from 'react';

function PokeTeam({pokemon}){

    const pokemonOnTeam = pokemon.filter(poke => poke.isOnTeam)

    const teamList = pokemonOnTeam.map(poke => {
        return(
            <li key={poke.url}>{poke.name}</li>
        )
    })

    return(
        <>
            <h3>Pokemon Team</h3>
            <ul>
                {teamList}
            </ul>
        </>
    )

}

export default PokeTeam;