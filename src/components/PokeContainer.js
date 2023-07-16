import React, {useState, useEffect} from 'react';
import PokeSelector from './PokeSelector';
import Pokemon from './Pokemon';
import PokeTeam from './PokeTeam';

function PokeContainer(){
    
    const[pokemon, setPokemon] = useState([]);
    const[selectedPokemonUrl, setSelectedPokemonUrl] = useState('');
    const[selectedPokemonDetails, setSelectedPokemonDetails] = useState(null);
    
    useEffect(() => {
        getPokemon();
    },[]);
    
    useEffect(() => {
        if(selectedPokemonUrl){
            getSelectedPokemon();
        }
    },[selectedPokemonUrl]);
    
    const getPokemon = async function(){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1281");
        const pokemon = await res.json();
        const sortedPokemon = pokemon.results.sort(function(pokemon1, pokemon2){
            if (pokemon1.name > pokemon2.name) return 1;
            if (pokemon1.name < pokemon2.name) return -1;
            return 0;
        });
        setPokemon(sortedPokemon);
    }
    
    const handlePokemonSelected = url => {
        setSelectedPokemonUrl(url)
    }
    
    
    const getSelectedPokemon = async function(){
        const res = await fetch(selectedPokemonUrl);
        const pokemonDetails = await res.json();
        setSelectedPokemonDetails(pokemonDetails);
    }
    
    const selectedPokemon = pokemon.find(poke => poke.url === selectedPokemonUrl)

    const handleTeamToggle = (url) => {
        const updatedPokemon = pokemon.map((poke) => {
          return poke.url === url 
            ? {...poke, isOnTeam: !poke.isOnTeam}
            : poke
        })
        setPokemon(updatedPokemon)
      }


    return(
        <>
            <PokeSelector pokemon={pokemon} onPokemonSelected={handlePokemonSelected}/>
            <Pokemon pokemon={selectedPokemonDetails} selectedPokemon={selectedPokemon} onTeamToggle={handleTeamToggle}/>
            <PokeTeam pokemon={pokemon}/>
        </>
    )
    

}

export default PokeContainer;