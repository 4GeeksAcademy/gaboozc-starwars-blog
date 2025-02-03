import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './Context/FavoriteContext';
import Navbar from './components/Navbar';
import CharacterList from './pages/CharacterList';
import PlanetList from './pages/PlanetList';
import SpeciesList from './pages/SpeciesList';
import StarshipList from './pages/StarshipList';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/planets" element={<PlanetList />} />
          <Route path="/species" element={<SpeciesList />} />
          <Route path="/starships" element={<StarshipList />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
