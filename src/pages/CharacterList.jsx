import React, { useEffect, useState } from 'react';
import { useFavorites } from '../Context/FavoriteContext'; import '../style/CharacterList.css'; 

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const { addFavorite } = useFavorites(); // Obtiene la función para agregar favoritos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="character-list">
      <h1>Characters</h1>
      <p>Meet the iconic characters of Star Wars.</p>
      <ul>
        {characters.map((character, index) => (
          <li key={character.name}>
            {/* Placeholder image */}
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              alt={character.name}
              className="character-image"
            />
            <div className="character-info">
              <h3>{character.name}</h3>
              <p>Height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
              <p>Birth Year: {character.birth_year}</p>
            </div>
            <button className="btn" onClick={() => addFavorite(character)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
