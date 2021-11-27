const Label = ({ labelFor, value }) => {
  return (
    <label className="block pb-1 pl-1 text-md" for={labelFor}>
      {value}
      <span class="text-red-600">*</span>
    </label>
  );
};

export default Label;
