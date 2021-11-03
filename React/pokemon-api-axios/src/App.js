import './App.css';
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])


  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
      .then(response => {
        console.log(response.data);
        setPokemon(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h2>Pokemons</h2>
      <button onClick={axiosPokemons}>Fetch pokemons </button>
      <hr />
    {/* {JSON.stringify(pokemon)} */}
      <hr />
      {
        pokemon.map((poke, i) => {
          return (
            <p key={i}> <li>{poke.name} </li> </p>
          )
        })
      }
    </div>
  );
}

export default App;
