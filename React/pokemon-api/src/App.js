import './App.css';
import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
      .then(response => {
        return response.json()
      })
      .then(pokeRes => {
        console.log(pokeRes)
        setPokemon(pokeRes.results)
        console.log("newPoke=>" ,pokemon)

      })
      .catch(err => console.log(err))

  }


  return (
    <div className="App">
      <h2>Pokemons</h2>
      <button onClick={fetchPokemons}>Fetch pokemons </button>
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
