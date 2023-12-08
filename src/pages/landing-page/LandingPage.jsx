import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/landing-page-components/banner/Banner";
import imageService from "../../assets/picture/service-img.png";
import ListOurService from "../../components/landing-page-components/list/ListOurService";
import WhyUsCard from "../../components/landing-page-components/card/WhyUsCard";
import TestimonialCarousel from "../../components/landing-page-components/carousel/TestimonialCarousel";
import RentalCard from "../../components/landing-page-components/card/RentalCard";
import FaqAccordion from "../../components/landing-page-components/accordion/FaqAccordion";
import Footer from "../../components/footer/footer";

const LandingPage = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Banner />
      <div className="mt-20 ml-6 mr-6 md:ml-32 md:mr-32 lg:ml-20 lg:space-x-16 lg:mr-20 min-[1800px]:ml-64  min-[1800px]:mr-64 min-[1620px]:ml-56  min-[1600px]:mr-56  min-[1190px]:ml-36  min-[1190px]:mr-36  min-[1500px]:mr-48  min-[1500px]:ml-48 flex flex-col lg:flex-row  space-y-10 items-center">
        <img
          src={imageService}
          alt="image service"
          className="w-[450px] lg:w-96  min-[1190px]:w-[800px]  min-[1620px]:w-[1400px]"
        />
        <div className="space-y-5">
          <div className="font-sans font-bold text-xl md:text-2xl  min-[1190px]:text-3xl  min-[1600px]:text-4xl ">
            <h2>Best Car Rental for any kind of trip in Balikpapan!</h2>
          </div>
          <div className="font-sans font-light text-sm md:text-lg lg:text-sm  min-[1600px]:text-lg ">
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
        <div className="flex flex-col px-4 lg:px-10  min-[1190px]:px-20  w-full gap-4 mb-5">
          <h2 className="flex justify-center font-bold font-sans text-2xl md:text-3xl  min-[1600px]:text-4xl  lg:justify-start">
            Why Us
          </h2>
          <p className="flex justify-center font-light font-sans text-sm md:text-lg lg:text-sm  min-[1600px]:text-lg lg:justify-start">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <WhyUsCard />
      </div>

      <div className="mt-20">
        <div className="px-4">
          <h3 className="text-center font-sans font-bold text-2xl md:text-3xl  min-[1600px]:text-4xl ">
            Testimonial
          </h3>
          <p className="text-center font-sans font-light text-sm md:text-lg lg:text-sm  min-[1600px]:text-lg mt-4">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <TestimonialCarousel />
      </div>

      <div className="mt-20">
        <RentalCard />
      </div>

      <div className="mt-20">
        <div className="px-4 lg:px-10 min-[1190px]:px-20    flex flex-col gap-4 w-full lg:w-5/12 mb-7">
          <h2 className="flex justify-center font-bold font-sans text-2xl md:text-3xl  min-[1600px]:text-4xl  lg:justify-start">
            Frequently Asked Question
          </h2>
          <p className="flex justify-center lg:justify-start font-light font-sans text-sm md:text-lg  min-[1600px]:text-lg lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <FaqAccordion />
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
