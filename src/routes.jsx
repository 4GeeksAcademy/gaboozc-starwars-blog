import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import StarshipList from "./pages/StarshipList";
import PlanetList from "./pages/PlanetList";
import SpeciesList from "./pages/SpeciesList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>have you heard the tragedy of darth plagueis?</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/starships" element={<StarshipList />} />
      <Route path="/planets" element={<PlanetList />} />
      <Route path="/species" element={<SpeciesList />} />
    </Route>
  )
);
