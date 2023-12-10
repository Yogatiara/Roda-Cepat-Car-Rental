/* eslint-disable react/prop-types */
const CarCard = ({ carData }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-56 md:h-48 xl:h-60 min-[1660px]:h-[260px]">
        <img
          src={carData.image}
          alt="car image"
          className="rounded-t-lg w-full h-full"
        />
      </div>
      <div className="p-3 space-y-3">
        <h5 className="mb-2 text-lg  tracking-tight text-gray-900 dark:text-white">
          {carData.manufacture} | {carData.type}
        </h5>
        <p className="mb-3 text-lg font-bold text-gray-700 dark:text-gray-400">
          Rp{carData.rentPerDay.toLocaleString("id-ID")}/hari
        </p>
        <div className="pt-6">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5CB85F] rounded-lg hover:bg-[#8bc98d]  focus:outline-none"
          >
            Lihat selangkapnya
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
