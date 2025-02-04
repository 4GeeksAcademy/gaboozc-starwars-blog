import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/PlanetDetail.css'; 

const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <p>Loading planet details...</p>;
  }

  const generateSummary = () => {
    return `${planet.name} is a ${planet.terrain} planet with a climate of ${planet.climate}. It has a diameter of ${planet.diameter} km and a population of ${planet.population}.`;
  };

  return (
    <div className="character-list"> 
      <h1>{planet.name}</h1>
      <p>{generateSummary()}</p>
      <div className="character-info">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={planet.name}
          className="character-image"
        />
        <p><strong>Climate:</strong> {planet.climate}</p>
        <p><strong>Diameter:</strong> {planet.diameter} km</p>
        <p><strong>Gravity:</strong> {planet.gravity}</p>
        <p><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
        <p><strong>Population:</strong> {planet.population}</p>
        <p><strong>Rotation Period:</strong> {planet.rotation_period} hours</p>
        <p><strong>Surface Water:</strong> {planet.surface_water}%</p>
        <p><strong>Terrain:</strong> {planet.terrain}</p>
      </div>
    </div>
  );
};

export default PlanetDetail;
