import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeCard } from "./card";

export default function Home() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = async (searchword = "chicken") => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
      );
      const recipeData = res.data.meals;
      setRecipe(recipeData);
    } catch (err) {
      console.log("failed to fetch", err);
    }
  };

  //TODO
  const handleViewRecipeDetails = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearchClick(searchword){
    fetchData(searchword);
    onSearch(searchword);
}

  return (
    <div>
        <SearchBar onSearch={handleSearchClick} />
      {recipe.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          title={meal.strMeal}
          category={meal.strCategory}
          imageSrc={meal.strMealThumb}
          altText={meal.strMeal}
          handleViewRecipeDetails={handleViewRecipeDetails}
        />
      ))}
    </div>
  );
}
