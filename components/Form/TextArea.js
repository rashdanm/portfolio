const TextArea = ({ value, onChange, name }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={8}
      style={{ resize: "none" }}
      autoComplete="off"
      type="text"
      className="w-full px-2 py-2 mb-5 text-gray-900 placeholder-gray-300 border-2 border-gray-200 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
    ></textarea>
  );
};

export default TextArea;
