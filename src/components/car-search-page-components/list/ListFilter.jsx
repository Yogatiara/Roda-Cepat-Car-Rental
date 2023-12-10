import { Radio, Label } from "flowbite-react";

const ListFilter = () => {
  return (
    <div className="space-y-4">
      <fieldset className="flex w-full flex-col gap-4 border-b border-gray-200 pb-5">
        <div className="flex items-center gap-2">
          <Radio id="united-state" name="countries" value="USA" />
          <Label htmlFor="united-state">Degan sopir</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="germany" name="countries" value="Germany" />
          <Label htmlFor="germany">Tanpa sopir(lepas kunci)</Label>
        </div>
      </fieldset>

      <div className="border-b border-gray-200 pb-5">
        Pilih tanggal
        <input
          type="date"
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-[#5CB85F] focus:border-[#5CB85F] block   "
        />
      </div>

      <div className="border-b border-gray-200 pb-5">
        Pilih waktu ambil
        <select
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#5CB85F] focus:border-[#5CB85F] rounded-lg w-full "
          required
        >
          <option value="08:00">08.00 WITA</option>
          <option value="10:00">10.00 WITA</option>
          <option value="12:00">12.00 WITA</option>
          <option value="14:00">14.00 WITA</option>
          <option value="16:00">16.00 WITA</option>
        </select>
      </div>

      <form className="w-full mx-auto">
        <label
          htmlFor="website-admin"
          className="block mb-2  text-gray-900 dark:text-white"
        >
          Kapasitas mobil
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-[#5CB85F] focus:border-[#5CB85F] "
            placeholder="3"
          />
        </div>
      </form>
    </div>
  );
};

export default ListFilter;
