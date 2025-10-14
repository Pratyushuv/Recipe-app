export const RecipeCard = ({
  title,
  category,
  imageSrc,
  altText,
  id,
  handleViewRecipeDetails,
  toggleFavourite,
  isFavourite,
}) => {
  return (
    <div className="card bg--200 white w-full rounded-2xl border-1 border-zinc-500 shadow-2xl">
      <section className="flex w-full flex-col items-start gap-2 p-3 md:gap-5">
        <img src={imageSrc} alt={altText} className="w-full rounded-xl" />
        <h1 className="w-full text-center text-xl italic md:text-xl xl:text-2xl">
          {title}
        </h1>
        <p className="text-30 md:text-50 xl:text-80 w-full text-center font-semibold italic">
          {category}
        </p>

        <div className="buttons flex w-full flex-col justify-end gap-5">
          <button
            className="text-10 xl:text-50 md:text-50 w-50 self-center rounded-full border-2 bg-black px-3 py-2 font-bold text-white xl:w-40 xl:py-3"
            onClick={handleViewRecipeDetails}
          >
            View Details
          </button>
          <button
            className="flex w-full justify-center pb-4"
            onClick={() =>
              toggleFavourite({ id, title, category, imageSrc, altText })
            }
          >
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill={isFavourite ? "black" : "#ffffff"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default RecipeCard;
