/* eslint-disable react/prop-types */
const Button = ({ text, listBarHidden }) => {
  return (
    <button
      onClick={listBarHidden}
      type="button"
      href="#"
      className="inline-flex py-2 px-3 rounded-md bg-[#5CB85F] hover:bg-[#8bc98d] hover: font-sans text-md lg:text-xs  min-[1190px]:text-sm  min-[1600px]:text-lg text-white"
    >
      <p className="flex justify-center text-center">{text}</p>
    </button>
  );
};

export default Button;
