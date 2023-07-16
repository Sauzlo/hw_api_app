import React, {useState} from 'react';

function Pokemon({pokemon, selectedPokemon, onTeamToggle}){

    if (!pokemon || !selectedPokemon){
        return null;
    };

    const handleClick = () => {
        onTeamToggle(selectedPokemon.url)
    }

    const teamBtnText = selectedPokemon.isOnTeam ? 'Remove from team' : 'Add to team'

    return(
        <>
            <h2>Name: {selectedPokemon.name}</h2>
            <h3>Type: {pokemon.types[0].type.name}</h3>
            <button onClick={handleClick}>{teamBtnText}</button>
        </>
    )
}

export default Pokemon;