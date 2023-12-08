import Button from "../../button/Button";
import imageCar from "../../../assets/picture/car-img.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-24 md:pt-28 space-y-5 space-x-3 bg-[#F1F3FF] md:pl-10 min-[880px]:pl-20 lg:pl-10  min-[1190px]:pl-20">
      <div className="flex flex-col space-y-5 min-[1600px]:space-y-7 self-center w-full p-4">
        <div>
          <h1 className="font-bold text-4xl lg:text-2xl font-sans  min-[1190px]:text-4xl ">
            Sewa & Rental Mobil Terbaik di kawasan Balikpapan
          </h1>
          <p className="mt-4 max-w-[468px] lg:text-xs min-[1190px]:text-md min-[1600px]:text-lg  min-[1600px]:max-w-[650px] ">
            Selamat datang di Roda Cepat Car Rental. Kami menyediakan mobil
            kualitas terbaik dengan harga terjangkau. Selalu siap meyalani
            kebutuhanmu untuk sewa mobil selama 24 jam
          </p>
        </div>
        <div>
          <Button text={"Mulai Sewa Mobil"} />
        </div>
      </div>

      <div>
        <img
          src={imageCar}
          alt="Mobil"
          className="w-full min-[1190px]:w-[1200px] min-[1600px]:w-[1500px]  "
        />
      </div>
    </div>
  );
};

export default Banner;
