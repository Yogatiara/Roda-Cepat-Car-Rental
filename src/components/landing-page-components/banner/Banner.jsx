import Button from "../../button/Button";
import imageCar from "../../../assets/picture/car-img.png";

const Banner = () => {
  return (
    <div className="bg-[#F1F3FF] mx-auto" id="Home">
      <div className=" mx-auto pt-24 ">
        <div className="flex flex-col space-y-5 space-x-3">
          <div className="flex flex-col space-y-5 self-center w-full p-4 lg:w-1/2">
            <div>
              <h1 className="font-bold text-4xl font-sans">
                Sewa & Rental Mobil Terbaik di kawasan Balikpapan
              </h1>
              <p className="mt-4 max-w-[468px]">
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
            <img src={imageCar} alt="Mobil" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
