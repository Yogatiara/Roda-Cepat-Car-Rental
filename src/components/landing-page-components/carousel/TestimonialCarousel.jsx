import { useRef, useState, useEffect } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const slickSettings = {
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md mt-10 md:px-10 min-[880px]:px-20 lg:px-10 min-[1190px]:px-20   ">
      <Slider {...slickSettings} ref={sliderRef} className="-z-10">
        <div className="px-2 ">
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

        <div className="px-2 ">
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

        <div className="px-2 ">
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
        <div className="px-2 ">
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
