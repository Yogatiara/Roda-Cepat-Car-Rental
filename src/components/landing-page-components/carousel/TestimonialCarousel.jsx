import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialCarousel = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlideToshow] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slickSettings = {
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 768) {
        setSlideToshow(1);
      } else {
        setSlideToshow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto mt-10">
      <Slider {...slickSettings} ref={sliderRef}>
        <div className="lg:max-w-[619px] px-4 w-full hidden lg:block">
          <div className="flex flex-wrap lg:flex-nowrap border rounded-lg py-10 px-8 gap-6 lg:gap-[46px] lg:pl-[46px] lg:py-[69px] lg:pr-8 bg-abu-putih">
            <div className="flex justify-center w-full lg:w-[15%] items-center">
              <img
                src="/asset/img_photo (1).png"
                className="max-w-[80px] max-h-[80px] flex justify-center items-center"
              />
            </div>

            <div className="flex flex-col gap-6 lg:w-[85%] w-full">
              <div className="flex justify-center lg:justify-start">
                <img src="/asset/Rate.png" />
              </div>
              <div className="w-full font-sans text-sm">
                <p className="font-light max-w-[415px]">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="mt-2 flex justify-start font-semibold">
                  John Dee 32, Bromo
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[619px] px-4 w-full">
          <div className="flex flex-wrap lg:flex-nowrap border rounded-lg py-10 px-8 gap-6 lg:gap-[46px] lg:pl-[46px] lg:py-[69px] lg:pr-8 bg-abu-putih">
            <div className="flex justify-center w-full lg:w-[15%] items-center">
              <img
                src="/asset/img_photo (2).png"
                className="max-w-[80px] max-h-[80px] flex justify-center items-center"
              />
            </div>

            <div className="flex flex-col gap-6 lg:w-[85%] w-full">
              <div className="flex justify-center lg:justify-start">
                <img src="/asset/Rate.png" />
              </div>
              <div className="w-full font-sans text-sm">
                <p className="font-light max-w-[415px]">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="mt-2 flex justify-start font-semibold">
                  John Dee 32, Bromo
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[619px] px-4 w-full hidden lg:block">
          <div className="flex flex-wrap lg:flex-nowrap border rounded-lg py-10 px-8 gap-6 lg:gap-[46px] lg:pl-[46px] lg:py-[69px] lg:pr-8 bg-abu-putih">
            <div className="flex justify-center w-full lg:w-[15%] items-center">
              <img
                src="/asset/img_photo (1).png"
                className="max-w-[80px] max-h-[80px] flex justify-center items-center"
              />
            </div>

            <div className="flex flex-col gap-6 lg:w-[85%] w-full">
              <div className="flex justify-center lg:justify-start">
                <img src="/asset/Rate.png" />
              </div>
              <div className="w-full font-sans text-sm">
                <p className="font-light max-w-[415px]">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <h4 className="mt-2 flex justify-start font-semibold">
                  John Dee 32, Bromo
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="flex flex-row justify-center mt-4 lg:mt-6 gap-6">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="rounded-full border-2 border:border hover:bg-[#5CB85F]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="rounded-full border-2 border:border hover:bg-[#5CB85F]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none "
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
