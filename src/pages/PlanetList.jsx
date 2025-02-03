// src/pages/PlanetList.jsx
import React, { useEffect, useState } from 'react';
import '../style/PlanetList.css'; // Import the CSS file

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="planet-list">
      <h1>Planets</h1>
      <p>Explore the various planets in the galaxy.</p>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {/* Placeholder image, as SWAPI doesn't provide planet images */}
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.match(/\/([0-9]*)\/$/)[1]}.jpg`}
              alt={planet.name}
              className="planet-image"
            />
            <div className="planet-info">
              <h3>{planet.name}</h3>
              <p>Climate: {planet.climate}</p>
              <p>Population: {planet.population}</p>
              <p>Terrain: {planet.terrain}</p>
            </div>
            <button className="btn">Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;
