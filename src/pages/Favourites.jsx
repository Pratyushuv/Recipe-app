import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import RecipeCard from "../components/card";

export default function Favourites(){
    const[favouriteRecipes, setFavouriteRecipes] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem("fav")) || [];
        setFavouriteRecipes(storedRecipes);
    },[]);

    const handleRemoveFavourites = (recipe) => {
        const updatedFav = favouriteRecipes.filter((fav) => fav.id !== recipe.id);
        setFavouriteRecipes(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));
    }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Your Favourites</h1>
      {favouriteRecipes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favouriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              handleViewRecipeDetails={() => navigate(`/recipe/${recipe.id}`)}
              handleAddFavourites={() => handleRemoveFavourites(recipe)}
              isFavourite={true}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No favourite recipes yet!
        </p>
      )}
    </div>
  );
}