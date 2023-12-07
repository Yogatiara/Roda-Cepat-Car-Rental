import Button from "../button/Button";

const Listbar = () => {
  return (
    <div className="space-y-3 ml-1">
      <ul>
        <li className="py-2 font-sans text-md">
          <a
            href="#OurService"
            alt="OurService"
            className="hover:text-[#5CB85F] lg:max-h-[20px]"
          >
            Our Service
          </a>
        </li>
        <li className="py-2 font-sans text-md">
          <a href="#WhyUs" alt="WhyUs" className="hover:text-[#5CB85F]">
            Why Us
          </a>
        </li>
        <li className="py-2 font-sans text-md">
          <a
            href="#Testimonial"
            alt="Testimonial"
            className="hover:text-[#5CB85F]"
          >
            Testimonial
          </a>
        </li>
        <li className="py-2 font-sans text-md">
          <a href="#FAQ" alt="FAQ" className="hover:text-[#5CB85F]">
            FAQ
          </a>
        </li>
      </ul>
      <Button text={"Register"} />
    </div>
  );
};

export default Listbar;
