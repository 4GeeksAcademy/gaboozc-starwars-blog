import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../Context/FavoriteContext';
import '../style/SpeciesList.css';

const SpeciesList = () => {
  const [species, setSpecies] = useState([]);
  const { addFavorite } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/species/');
        const data = await response.json();
        setSpecies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="species-list">
      <h1>Species</h1>
      <p>Discover the diverse species of Star Wars.</p>
      <ul>
        {species.map((specie) => {
          const id = specie.url.match(/\/([0-9]*)\/$/)[1]; 

          return (
            <li key={specie.name}>
              <img
                src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
                alt={specie.name}
                className="species-image"
              />

              <div className="species-info">
                <h3>
                  <Link to={`/species/${id}`}>{specie.name}</Link>
                </h3>
                <p>Classification: {specie.classification}</p>
                <p>Language: {specie.language}</p>
                <p>Average Lifespan: {specie.average_lifespan} years</p>
              </div>
              <button className="btn" onClick={() => addFavorite(specie)}>
                Add to Favorites
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpeciesList;