const Input = ({ type, value, onChange, name }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full px-2 py-2 mb-2 text-gray-900 placeholder-gray-300 border-2 border-gray-200 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
    />
  );
};

export default Input;
