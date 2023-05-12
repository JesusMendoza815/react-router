import { Link, Outlet } from "react-router-dom";
import "../styles/CharacterList.scss";

export default function CharactersList({ data }) {
  return (
    <section id="characters-container">
      {data.map((character) => (
        <CharacterCard data={character} key={character.id} />
      ))}
    </section>
  );
}

function CharacterCard({ data }) {
  const { image, name, id } = data;
  return (
    <div className="card">
      <Link to={`character/${id}`} className="card-body">
        <img src={image} alt={`${name} image`} />
        <div className="card-info">
          <h3 className="c-green name">{name}</h3>
        </div>
      </Link>
    </div>
  );
}
