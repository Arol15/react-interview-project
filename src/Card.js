import { getPokemonSpriteUrl } from "../api/utils";

export default function Card({ data }) {
  const id = data.pokemonId;
  const img = getPokemonSpriteUrl(id);
  const pokemons = data.pokemonList;

  return (
    <div>
      <div>
        <img alt="pic" src={img} />
      </div>
      <h1>{id > 0 ? pokemons[id - 1].name : "Not found"} </h1>
      <p>{data.description}</p>
    </div>
  );
}
