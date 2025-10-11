export const RecipeCard = ({ title, category, imageSrc }) => {
  return (
    <div className="card bg--200 white w-full rounded-2xl border-1 border-zinc-500 shadow-2xl">
      <section className="flex w-full flex-col items-start gap-4 p-3 md:gap-10">
        <img src={imageSrc} alt="food-image" className="w-full rounded-xl" />
        <h1 className="w-full text-center text-3xl italic md:text-5xl xl:text-8xl">
          {title}
        </h1>
        <p className="w-full text-center text-2xl font-semibold italic md:text-4xl xl:text-6xl">
          {category}
        </p>

        <div className="buttons flex w-full flex-col justify-end gap-10">
          <button className="text-10 w-50 self-center rounded-full border-2 bg-black px-3 py-2 font-bold text-white md:text-2xl xl:w-80 xl:py-5 xl:text-4xl">
            View Details
          </button>
          <button className="flex w-full justify-center pb-4">
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
