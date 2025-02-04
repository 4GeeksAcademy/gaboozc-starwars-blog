import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/StarshipDetail.css'; 

const StarshipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        const data = await response.json();
        setStarship(data);
      } catch (error) {
        console.error('Error fetching starship details:', error);
      }
    };

    fetchStarship();
  }, [id]);

  if (!starship) {
    return <p>Loading starship details...</p>;
  }

  const generateSummary = () => {
    return `${starship.name} is a ${starship.starship_class} class starship manufactured by ${starship.manufacturer}. It has a length of ${starship.length} meters and can carry a crew of ${starship.crew} with ${starship.passengers} passengers.`;
  };

  return (
    <div className="character-list"> 
      <h1>{starship.name}</h1>
      <p>{generateSummary()}</p>
      <div className="character-info">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt={starship.name}
          className="character-image"
        />
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
        <p><strong>Length:</strong> {starship.length} meters</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
        <p><strong>Passengers:</strong> {starship.passengers}</p>
        <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
        <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
        <p><strong>Starship Class:</strong> {starship.starship_class}</p>
      </div>
    </div>
  );
};

export default StarshipDetail;
