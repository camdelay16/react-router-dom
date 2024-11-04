import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  const { pokemon } = props;

  const { pokemonId } = useParams();
  const singlePokemon = pokemon.find((poke) => poke._id === Number(pokemonId));
  console.log("pokemon object", singlePokemon);

  return (
    <>
      <h2>Pokemon Details</h2>
      <h3>{singlePokemon.name}</h3>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
