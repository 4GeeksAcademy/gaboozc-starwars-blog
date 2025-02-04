import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../Context/FavoriteContext';
import '../style/StarshipList.css';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const { addFavorite } = useFavorites();

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
        {starships.map((starship) => {
          const id = starship.url.match(/\/([0-9]*)\/$/)[1]; 

          return (
            <li key={starship.name}>
              {/* Imagen de la nave */}
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                alt={starship.name}
                className="starship-image"
              />

              <div className="starship-info">
                <h3>
                  <Link to={`/starships/${id}`}>{starship.name}</Link>
                </h3>
                <p>Model: {starship.model}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Cost in Credits: {starship.cost_in_credits}</p>
              </div>
              <button className="btn" onClick={() => addFavorite(starship)}>
                Add to Favorites
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StarshipList;