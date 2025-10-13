import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { RecipeCard } from "./card";
import SearchBar from "./Searchbar";

export default function Home() {
  const [recipe, setRecipe] = useState([]);

  const getStoredData = () => {
    return JSON.parse(localStorage.getItem("fav")) || [];
  };

  const [favourites, setFavourites] = useState(getStoredData);

  const fetchData = async (keyword = "chicken") => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
      );
      const recipeData = res.data.meals;
      setRecipe(recipeData);
    } catch (err) {
      console.log("failed to fetch", err);
    }
  };

  //TODO
  const handleViewRecipeDetails = () => {

  };

  const handleAddFavourites = (recipe) => {
    if (favourites.some((fav) => fav.id === recipe.id)) {
      setFavourites(favourites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavourites([...favourites, recipe]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useMemo(
    () => localStorage.setItem("fav", JSON.stringify(favourites)),
    [favourites],
  );

  function handleSearchClick(searchKeyword) {
    fetchData(searchKeyword);
  }
//TODO need to route to /favourite 
  function handleFavouriteRecipes() {
    console.log("Favourites button clicked");
  }

  return (
    <div className="w-full px-4 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-8 w-full">
      <SearchBar onSearch={handleSearchClick} />
      <button onClick={handleFavouriteRecipes} className="bg-[rgba(114,63,95,1)] hover:bg-[rgba(114,63,95,0.9)] text-white px-5 py-3 rounded-full font-semibold text-base sm:text-lg shadow-md transition-all duration-200 mt-">Favourites</button>
      </div>
      <div className="cards grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 md:p-5 lg:grid-cols-4 lg:p-10 xl:grid-cols-5">
        {recipe.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            category={meal.strCategory}
            imageSrc={meal.strMealThumb}
            altText={meal.strMeal}
            handleViewRecipeDetails={handleViewRecipeDetails}
            handleAddFavourites={handleAddFavourites}
            isFavourite={favourites.some((fav) => fav.id === meal.idMeal)}
          />
        ))}
      </div>
    </div>
  );
}
