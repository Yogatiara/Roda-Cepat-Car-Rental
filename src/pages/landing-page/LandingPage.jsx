import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/landing-page-components/banner/Banner";
import imageService from "../../assets/picture/service-img.png";
import ListOurService from "../../components/landing-page-components/list/ListOurService";
import WhyUsCard from "../../components/landing-page-components/card/WhyUsCard";
import TestimonialCarousel from "../../components/landing-page-components/carousel/TestimonialCarousel";

const LandingPage = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Banner />
      <div className="mt-20 ml-6 mr-6 flex flex-col space-y-10">
        <img src={imageService} alt="image service" />
        <div className="space-y-5">
          <div className="font-sans font-bold text-xl">
            <h2>Best Car Rental for any kind of trip in Balikpapan!</h2>
          </div>
          <div className="font-sans font-light text-sm">
            <p>
              Sewa mobil di (Lokasimu) bersama Roda Cepat Car Rental jaminan
              harga lebih murah dibandingkan yang lain, kondisi mobil baru,
              serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
          </div>
          <ListOurService />
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col px-4 w-full gap-4 mb-5">
          <h2 className="flex justify-center font-bold font-sans text-2xl lg:justify-start">
            Why Us
          </h2>
          <p className="flex justify-center font-light font-sans text-sm lg:justify-start">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <WhyUsCard />
      </div>

      <div className="mt-20">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default LandingPage;
