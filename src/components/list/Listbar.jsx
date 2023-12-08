import Button from "../button/Button";

const Listbar = () => {
  return (
    <div className="flex flex-col max-md:space-y-4 md:flex-row md:items-center">
      <ul className="font-medium flex flex-col p-0 mt-4 border lg:text-sm  min-[1600px]:text-lg border-gray-100 rounded-lg bg-gray-50 min-[527px]:flex-row min-[527px]:space-x-8 rtl:space-x-reverse min-[527px]:mt-0 min-[527px]:border-0 min-[527px]:bg-white dark:bg-gray-800 min-[527px]:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 hover:text-[#5CB85F] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Our Service
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 hover:text-[#5CB85F] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Why Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 hover:text-[#5CB85F] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Testimonial
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 hover:text-[#5CB85F] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Faq
          </a>
        </li>
        <li></li>
      </ul>
      <div>
        <Button text={"Daftar"} />
      </div>
    </div>
  );
};

export default Listbar;
