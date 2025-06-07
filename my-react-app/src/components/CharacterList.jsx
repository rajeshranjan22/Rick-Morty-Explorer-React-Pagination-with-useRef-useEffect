import React from "react";
import "./CharacterList.css";

const CharacterList = ({ characters }) => {
    return (
        <div className="character-grid">
            {characters.map((char) => (
                <div className="character-card" key={char.id}>
                    <img src={char.image} alt={char.name} />
                    <h3>{char.name}</h3>
                    <p>{char.species}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
