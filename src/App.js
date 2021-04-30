import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDescription } from "../api/utils";
import Select from "../components/Select";
import Card from "./Card";
import "./styles.css";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getList() {
      const list = await getPokemonList();
      setPokemonList(list);
    }
    getList();
  }, []);

  useEffect(() => {
    async function getDescription() {
      const data = await getPokemonDescription();
      setDescription(data);
    }
    getDescription();
  }, []);

  // console.log(description);

  const pokemonNames = pokemonList.map((pokemon, index) => {
    return (
      <option value={index + 1} key={index}>
        {pokemon.name}
      </option>
    );
  });

  function handleSelect(e) {
    // console.log(e.target.id)
    setPokemonId(parseInt(e.target.value, 10));
  }
  console.log(typeof pokemonId);
  console.log(pokemonId);

  return (
    <>
      <Select onChange={handleSelect}>{pokemonNames}</Select>
      <Card data={{ pokemonId, description, pokemonList }} />
      <button onClick={() => setPokemonId(pokemonId - 1)}>Previous</button>
      <button onClick={() => setPokemonId(pokemonId + 1)}>Next</button>
    </>
  );
}
