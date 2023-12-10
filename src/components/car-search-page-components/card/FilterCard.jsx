/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useLockBodyScroll } from "@uidotdev/usehooks";

import ListFilter from "../list/ListFilter";

const FilterCard = ({ setShowFilterCard }) => {
  if (setShowFilterCard) {
    useLockBodyScroll();
  }

  return (
    <div className=" bg-white shadow-md border  max-md:rounded-t-xl rounded-lg max-md:h-96  max-md:overflow-auto">
      <div className="flex flex-row justify-between fixed bg-white w-full rounded-t-xl px-6 py-4 items-center md:hidden">
        <div className="flex flex-row space-x-6 ">
          <h4 className="text-[#5CB85F]">Filter</h4>
          <p className="text-red-500">Reset</p>
        </div>
        <svg
          onClick={setShowFilterCard}
          className="w-3.5 h-3.5 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </div>
      <div className="p-6 max-md:mt-16">
        <ListFilter />
      </div>
    </div>
  );
};

export default FilterCard;
