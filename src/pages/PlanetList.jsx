import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../Context/FavoriteContext';
import '../style/PlanetList.css';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const { addFavorite } = useFavorites();

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
        {planets.map((planet) => {
          const id = planet.url.match(/\/([0-9]*)\/$/)[1]; 

          return (
            <li key={planet.name}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={planet.name}
                className="planet-image"
              />

              <div className="planet-info">
                <h3>
                  <Link to={`/planets/${id}`}>{planet.name}</Link>
                </h3>
                <p>Climate: {planet.climate}</p>
                <p>Population: {planet.population}</p>
                <p>Terrain: {planet.terrain}</p>
              </div>
              <button className="btn" onClick={() => addFavorite(planet)}>
                Add to Favorites
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetList;