const Footer = () => {
  return (
    <div className="w-full mx-auto  pt-[60px]">
      <div className="flex flex-wrap px-4 md:px-10 min-[880px]:px-20 min-[1190px]:px-20   min-[1600px]:text-lg lg:px-10 lg:flex-nowrap gap-16 pb-16 lg:justify-between text-sm ">
        <div className="flex flex-col gap-4  md:w-1/2 w-full font-sans  font-light">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>

        <div className="flex flex-col gap-4 lg:w-[15%] md:w-1/2 w-full font-sans font-normal ">
          <a href="#OurService">
            <h4 className="hover:text-green">Our Service</h4>
          </a>
          <a href="#WhyUs">
            <h4 className="hover:text-green">Why Us</h4>
          </a>
          <a href="#Testimonial">
            <h4 className="hover:text-green">Testimonial</h4>
          </a>
          <a href="#FAQ">
            <h4 className="hover:text-green">FAQ</h4>
          </a>
        </div>

        <div className="flex flex-col gap-4 lg:w-[35%] md:w-1/2 w-full">
          <p className="font-sans  font-light">Connect with us</p>
          <div className="flex flex-row gap-4">
            <img src="/asset/icon_facebook.png" />
            <img src="/asset/icon_instagram.png" />
            <img src="/asset/icon_twitter.png" />
            <img src="/asset/icon_mail.png" />
            <img src="/asset/icon_twitch.png" />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[30%] md:w-1/2 w-full">
          <p className="font-sans  font-light">Copyright Binar 2022</p>
          <a href="#Home">
            <img
              src="/asset/logo.png"
              className="max-w-[100px] max-h-[34px]:"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
