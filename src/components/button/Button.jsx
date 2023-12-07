/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <button
      type="button"
      href="#"
      className="inline-flex py-2 px-3 rounded-md bg-[#5CB85F] font-sans text-md text-white"
    >
      <p className="flex justify-center text-center">{text}</p>
    </button>
  );
};

export default Button;
