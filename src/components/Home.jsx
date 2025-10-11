<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeCard } from "./card";

export default function Home() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = async (searchword = "chicken") => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchword}`,
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
=======
import { useEffect } from "react"
import axios from "axios"
import SearchBar from "./Searchbar";
export default function Home(){
    //TODO:should be integrated once the UI is ready
    const fetchData=async(searchword = "chicken")=>{
        try{
            const res=await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchword}`)
                console.log(res.data.meals)
        }catch(err){
        console.log("failed to fetch",err)
    }
};
useEffect(()=>{
    fetchData()
},[])

function handleSearchClick(searchword){
    console.log("search word: ",searchword)
>>>>>>> 9a5b042 (fix:comments resolved)
    fetchData(searchword);
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
