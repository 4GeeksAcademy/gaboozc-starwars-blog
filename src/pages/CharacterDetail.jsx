import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/CharacterDetail.css'; 

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading character details...</p>;
  }

  const generateSummary = () => {
    return `Meet ${character.name}, a ${character.gender} character with ${character.hair_color} hair and ${character.eye_color} eyes. ${character.name} stands at ${character.height} cm tall and weighs ${character.mass} kg.`;
  };

  return (
    <div className="character-list"> 
      <h1>{character.name}</h1>
      <p>{generateSummary()}</p>
      <div className="character-info">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={character.name}
          className="character-image"
        />
        <p><strong>Height:</strong> {character.height} cm</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Hair Color:</strong> {character.hair_color}</p>
        <p><strong>Skin Color:</strong> {character.skin_color}</p>
        <p><strong>Eye Color:</strong> {character.eye_color}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
