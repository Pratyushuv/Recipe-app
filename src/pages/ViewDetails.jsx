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
    <div className="min-h-screen w-full bg-[#fceef0] px-4 py-10 xl:px-40">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-2xl font-semibold text-[#8c0032] sm:text-3xl md:text-6xl">
          {recipe.strMeal}
        </h1>
        <p className="mb-12 text-center text-base text-[#ed002d] sm:text-lg md:text-xl">
          Category:{recipe.strCategory}
        </p>
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="px-4 sm:px-6 md:w-1/2 lg:w-1/3 lg:px-8">
            <h3 className="mb-2 text-lg font-semibold sm:text-xl md:text-2xl">
              Ingredients
            </h3>
            <ol className="list-inside list-disc space-y-1 text-sm whitespace-nowrap text-[#4d4d4d] sm:text-base xl:text-xl">
              {ingredients.map((items) => (
                <li key={items}>{items}</li>
              ))}
            </ol>
          </div>
          <div className="flex justify-center md:w-1/2 lg:w-2/3">
            <img
              src={recipe.strMealThumb}
              className="h-auto max-h-[400px] w-full max-w-md rounded-md object-cover lg:max-h-[600px] lg:max-w-lg"
            />
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold sm:px-6 sm:text-xl md:px-4 md:text-2xl lg:px-8">
          Instructions
        </h3>
        <p className="px-4 text-justify text-sm leading-relaxed text-[#4d4d4d] sm:px-6 sm:text-base lg:px-8 xl:text-xl">
          {recipe.strInstructions}
        </p>
        {recipe.strYoutube && (
          <div className="px-4 pt-8 sm:px-6 lg:px-8">
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
