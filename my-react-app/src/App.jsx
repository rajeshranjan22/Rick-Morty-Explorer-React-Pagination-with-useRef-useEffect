import React, { useEffect, useRef, useState } from "react";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import "./index.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const currentPageRef = useRef(1);

  const fetchCharacters = async (page) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPageRef.current);
  }, []);

  const handlePageChange = (page) => {
    currentPageRef.current = page;
    fetchCharacters(page);
  };

  return (
    <div className="container">
      <h1>Rick & Morty Explorer</h1>
      <CharacterList characters={characters} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPageRef.current}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
