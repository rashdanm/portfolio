const Label = ({ labelFor, value }) => {
  return (
    <label className="block pb-1 pl-1 mt-3 text-md" htmlFor={labelFor}>
      {value}
      <span className="text-red-600">*</span>
    </label>
  );
};

export default Label;
