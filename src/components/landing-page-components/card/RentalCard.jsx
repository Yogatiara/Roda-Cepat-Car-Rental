import Button from "../../button/Button";

const RentalCard = () => {
  return (
    <div className="space-y-7 flex flex-col p-6 min-[1190px]:p-10  justify-center items-center mx-4 md:mx-10 min-[880px]:mx-20 min-[1190px]:mx-20   lg:mx-10 rounded-md bg-[#0D28A6]">
      <h1 className="text-center font-sans font-bold text-2xl md:text-4xl max-w-[212px] md:max-w-[613px] text-white">
        Sewa Mobil di Balikpapan Sekarang
      </h1>
      <p className="text-center max-w-[212px] font-sans font-light text-sm mt-4 text-white md:max-w-[468px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button text={"Muali sewa mobil"} />
    </div>
  );
};

export default RentalCard;
