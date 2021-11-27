const ButtonSend = ({ buttonText }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 mt-6 text-lg text-white bg-green-700 rounded-md outline-none active:bg-purple-600 focus:ring-2 focus:ring-green-900 disabled:bg-opacity-50 disabled:cursor-not-allowed"
    >
      {buttonText}
    </button>
  );
};

export default ButtonSend;
