import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";

const BASE_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        setCharacters([{
          image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
          name: "Ops! Something wrong",
          species: "Error 400s"
        }])
      }
    };
    getData(BASE_URL);
  }, []);

  return (
    <>
      <header>
        <nav>
          <Link to="/" className="link-home">
            <h1><span className="c-green">Rick&Morty</span> API - React</h1>
          </Link>
          <hr />
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            characters.length > 0 ? (
              <CharactersList data={characters} />
            ) : (
              <h3>Loading...</h3>
            )
          }
        />
        <Route path="/character/:id" element={<CharacterDetails data={characters} />} />
      </Routes>
    </>
  );
}

export default App;
