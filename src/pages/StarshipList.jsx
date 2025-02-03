// src/pages/StarshipList.jsx
import React, { useEffect, useState } from 'react';
import '../style/StarshipList.css'; // Import the CSS file

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="starship-list">
      <h1>Starships</h1>
      <p>Discover the iconic starships of Star Wars.</p>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            {/* Placeholder image, as SWAPI doesn't provide starship images */}
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/\/([0-9]*)\/$/)[1]}.jpg`}
              alt={starship.name}
              className="starship-image"
            />
            <div className="starship-info">
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Cost in Credits: {starship.cost_in_credits}</p>
            </div>
            <button className="btn">Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;
