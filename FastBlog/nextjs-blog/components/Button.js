const Button = (props) => {
  const { title, pressHandler } = props;
  return (
    <button
      onClick={pressHandler}
      className="bg-blue-300 w-auto h-10 border rounded-lg"
    >
      <p className="px-5 text-black font-bold">{title}</p>
    </button>
  );
};

export default Button;
