import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeCard } from "./card";

export default function Home() {
  const [recipe, setRecipe] = useState([]);
  //TODO:should be integrated once the UI is ready
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",
      );
      const recipeData = res.data.meals;
      console.log(recipeData);
      setRecipe(recipeData);
    } catch (err) {
      console.log("failed to fetch", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {recipe.map((meal) => (
        <RecipeCard
          title={meal.strMeal}
          category={meal.strCategory}
          imageSrc={meal.strMealThumb}
        />
      ))}
    </div>
  );
}
