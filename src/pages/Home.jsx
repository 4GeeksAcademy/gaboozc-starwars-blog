import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <h1>STAR WARS</h1>
      <h2>A New Perspective on the Galaxy Far, Far Away</h2>
      <div className="section">
        <img src="https://i.pinimg.com/originals/e8/72/41/e87241e1668e8476722a216979dbdacc.gif" alt="Planets" className="section-image" />
        <div className="section-content">
          <h2>PLANETS</h2>
          <p>Travel across the galaxy to the many planets.</p>
          <Link to="/planets">
            <button className="btn btn-primary">Planets</button>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="https://media1.giphy.com/media/Qvqel9RwUS2ethQe2c/giphy.gif?cid=6c09b952gfvbb7ur519rbj6561zgfwb85ia289kwg47dhn12&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="Starships" className="section-image" />
        <div className="section-content">
          <h2>STARSHIPS</h2>
          <p>Discover the iconic starships of Star Wars.</p>
          <Link to="/starships">
            <button className="btn btn-primary">Starships</button>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="https://i.pinimg.com/originals/08/29/e8/0829e84cc1e842767bfd62357db9b108.gif" alt="Characters" className="section-image" />
        <div className="section-content">
          <h2>CHARACTERS</h2>
          <p>Discover the diverse characters of the galaxy, from brave heroes to nefarious villains.</p>
          <Link to="/characters">
            <button className="btn btn-primary">Characters</button>
          </Link>
        </div>
      </div>
      <div className="section">
        <img src="https://pa1.aminoapps.com/7263/79e7087f1d35b6a1f62298c088d70287b909b8cer1-256-256_00.gif" alt="Species" className="section-image" />
        <div className="section-content">
          <h2>SPECIES</h2>
          <p>Learn about the various species that inhabit the galaxy.</p>
          <Link to="/species">
            <button className="btn btn-primary">Species</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
