/* eslint-disable react/prop-types */
const FilterButton = ({ showing }) => {
  return (
    showing[1] && (
      <button
        onClick={showing[0]}
        type="button"
        className="flex flex-row p-2 md:hidden  space-x-2 z-10  drop-2xl border bottom-2  fixed rounded-md bg-[#5CB85F] hover:bg-[#8bc98d] hover: font-sans text-md lg:text-xs  min-[1190px]:text-sm  min-[1600px]:text-lg text-white"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
          />
        </svg>
        <p className="flex justify-center text-center">Filter</p>
      </button>
    )
  );
};

export default FilterButton;
