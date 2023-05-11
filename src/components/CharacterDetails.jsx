import { useParams } from "react-router-dom";
import "../styles/CharacterDetails.scss";

export default function CharacterDetails({ data }) {
  const { id } = useParams();
  const characterData = data.find(
    (character) => parseInt(character.id) === parseInt(id),
  );
  const { image, name, species, location, gender, episode } = characterData;

  return (
    <div className="card-details">
      <img src={image} alt={`${name} image`} />
      <div className="card-info">
        <h3 className="c-green name">{name}</h3>
        <span>
          <p className="c-subtitle">Specie: </p>
          <h3>{species}</h3>
        </span>
        <span>
          <p className="c-subtitle">Gender: </p>
          <h3>{gender}</h3>
        </span>
        <span>
          <p className="c-subtitle">Location: </p>
          <h3>{location.name}</h3>
        </span>
        <span>
          <p className="c-subtitle">Appearances episodes: </p>
          <h3>{episode.length}</h3>
        </span>
      </div>
    </div>
  );
}
