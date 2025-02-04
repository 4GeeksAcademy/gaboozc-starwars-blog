import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/SpeciesDetail.css'; 

const SpeciesDetail = () => {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/species/${id}/`);
        const data = await response.json();
        setSpecies(data);
      } catch (error) {
        console.error('Error fetching species details:', error);
      }
    };

    fetchSpecies();
  }, [id]);

  if (!species) {
    return <p>Loading species details...</p>;
  }

  const generateSummary = () => {
    return `${species.name} is a ${species.classification} species known for their ${species.skin_colors} skin and ${species.eye_colors} eyes. They have an average height of ${species.average_height} cm and typically live for around ${species.average_lifespan} years.`;
  };

  return (
    <div className="character-list"> 
      <h1>{species.name}</h1>
      <p>{generateSummary()}</p>
      <div className="character-info">
        <img
          src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
          alt={species.name}
          className="character-image"
        />
        <p><strong>Classification:</strong> {species.classification}</p>
        <p><strong>Designation:</strong> {species.designation}</p>
        <p><strong>Average Height:</strong> {species.average_height} cm</p>
        <p><strong>Skin Colors:</strong> {species.skin_colors}</p>
        <p><strong>Hair Colors:</strong> {species.hair_colors}</p>
        <p><strong>Eye Colors:</strong> {species.eye_colors}</p>
        <p><strong>Average Lifespan:</strong> {species.average_lifespan} years</p>
        <p><strong>Language:</strong> {species.language}</p>
      </div>
    </div>
  );
};

export default SpeciesDetail;
