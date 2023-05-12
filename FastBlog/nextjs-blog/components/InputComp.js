const InputComp = (props) => {
  const { tag, type, placeholder } = props;
  return (
    <div>
      <div class="mt-1">
        <label class="block text-gray-700 text-m font-bold mb-2" for="email">
          {tag}
        </label>
        <input
          className="border border-blue-300 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          //   id="email"
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    </div>
  );
};

export default InputComp;
