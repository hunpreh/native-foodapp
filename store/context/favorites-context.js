import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favIds, setFavIds] = useState([]);

  function addFavorite(id) {
    setFavIds((current) => [...current, id]);
  }
  function removeFavorite(id) {
    setFavIds((current) => current.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
