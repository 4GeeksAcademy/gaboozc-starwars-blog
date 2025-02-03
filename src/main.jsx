import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { StoreProvider } from './hooks/useGlobalReducer';
import { FavoritesProvider } from "./Context/FavoriteContext"; 

const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <FavoritesProvider> 
          <RouterProvider router={router} />
        </FavoritesProvider>
      </StoreProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
