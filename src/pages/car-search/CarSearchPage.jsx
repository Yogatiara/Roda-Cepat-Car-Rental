import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AOS from "aos";

import getCarData from "../../redux/actions/carAction";
import CarCard from "../../components/car-search-page-components/card/CarCard";
import SearchInput from "../../components/car-search-page-components/search-input/SearchInput";
import FilterButton from "../../components/car-search-page-components/button/FilterButton";
import FilterCard from "../../components/car-search-page-components/card/FilterCard";
import "./carSearchPage.css";
import "aos/dist/aos.css";

const CarSearchPage = () => {
  const dispatch = useDispatch();
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(true);

  const carData = useSelector((state) => state.car.carData);

  useEffect(() => {
    dispatch(getCarData());
  }, [dispatch]);

  const filterCardShowing = () => {
    AOS.init({
      once: true,
      duration: 400,
    });
    setShowFilterCard(true);
    setShowFilterButton(false);
  };

  const filterCardHidden = () => {
    setShowFilterCard(false);
    setShowFilterButton(true);
  };

  if (carData.length === 0) {
    return;
  }
  return (
    <div className="pt-28 ml-4 mr-4 min-[880px]:ml-20 min-[880px]:mr-20 lg:mr-10 lg:ml-10  min-[1190px]:mr-20  min-[1190px]:ml-20">
      {showFilterCard && (
        <div>
          <span className="overlay z-10" />
          <div data-aos="fade-up" className="fixed z-10  inset-x-0 bottom-0">
            <FilterCard setShowFilterCard={filterCardHidden} />
          </div>
        </div>
      )}

      <div className="flex flex-row justify-center">
        <FilterButton showing={[filterCardShowing, showFilterButton]} />
      </div>

      <Link
        to={"/"}
        className="text-[#5CB85F] flex flex-row items-center space-x-2 mb-4"
      >
        <svg
          className="w-4 h-4 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>

        <p className="text-lg"> Kembali</p>
      </Link>
      <SearchInput />
      <div className="flex md:space-x-6 xl:space-x-8">
        <div className="max-md:hidden pt-9">
          <FilterCard />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6  min-[500px]:grid-cols-2 min-[1190px]:grid-cols-3 pt-1">
          {carData.map((data, i) => (
            <div key={i}>
              <CarCard carData={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSearchPage;
