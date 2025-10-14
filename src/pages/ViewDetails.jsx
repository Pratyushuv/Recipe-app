import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        if (res.data.meals) {
          setRecipe(res.data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error("Failed to fetch recipe details", error);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeById();
  }, [id]);

  if (loading) {
    return <div className="text-red-600">Loading...</div>;
  }
  if (!recipe) {
    return <div className="text-red-600">No recipe found</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const mesure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(
        `${ingredient.trim()} ${mesure ? `(${mesure.trim()})` : ""}`,
      );
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden px-4 py-8 text-left font-bold sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="w-full max-w-5xl rounded-md bg-[#fceef0] p-4 sm:p-6 md:p-8">
        <h1 className="mb-2 text-2xl text-[#ed002d] sm:text-3xl md:text-4xl">
          {recipe.strMeal}
        </h1>
        <p className="mb-4 text-base text-[#8c0032] sm:text-lg md:text-xl">
          Category:{recipe.strCategory}
        </p>
        <img
          src={recipe.strMealThumb}
          className="mx-auto mb-6 h-auto max-h-[500px] w-full max-w-[500px] rounded-md"
        />
        <h3 className="mb-2 text-lg font-semibold sm:text-xl md:text-2xl">
          Ingredients
        </h3>
        <ol className="md:text mb-6 list-inside list-disc space-y-1 text-sm text-[#4d4d4d] sm:text-base">
          {ingredients.map((items) => (
            <li key={items}>{items}</li>
          ))}
        </ol>
        <h3 className="mb-2 text-lg font-semibold sm:text-xl md:text-2xl">
          Instructions
        </h3>
        <p className="text-sm leading-relaxed text-[#4d4d4d] sm:text-base md:text-lg">
          {recipe.strInstructions}
        </p>
        {recipe.strYoutube && (
          <div className="pt-8">
            <a
              href={recipe.strYoutube}
              target="_blank"
              className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-red-600 sm:text-base"
            >
              <img
                src="/src/assets/youtube.png"
                alt="youtube icon"
                className="h-5 w-5"
              />
              <span>Click to watch on youtube</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
