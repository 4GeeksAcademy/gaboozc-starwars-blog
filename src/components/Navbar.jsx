// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FavoritesContext } from '../Context/FavoriteContext'; 
import '../style/Navbar.css'; 

const starWarsLogoUrl = 'https://loodibee.com/wp-content/uploads/Star-Wars-Logo-black-background.png';
const decorativeImageUrl = 'https://preview.redd.it/who-do-you-think-had-the-best-faction-theme-v0-ulv9sfd1wedd1.png?width=480&format=png&auto=webp&s=ac36b39694da89e61a87be6d82e88badb3f7b68f';

export const Navbar = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <img src={starWarsLogoUrl} alt="Star Wars Logo" />
        </Link>
        <img src={decorativeImageUrl} alt="Decorative Image" className="decorative-image" />
        <div className="ml-auto">
          <button className="btn btn-primary" onClick={toggleDropdown}>Favorites</button>
          <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
            <ul>
              {favorites.map((item, index) => (
                <li key={index}>
                  {item.name} 
                  <button className="remove-btn" onClick={() => removeFavorite(item)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
