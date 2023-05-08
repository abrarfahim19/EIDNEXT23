import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
const DirectionalButton = (props) => {
  console.log("Props is:", props);
  const { disabled, left, handleClick } = props;
  return (
    <div className="w-10 h-10 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md active:bg-gray-200">
      <button
        onClick={() => {
          if (!disabled) handleClick();
        }}
        className={`w-10 h-10 ${
          disabled ? "bg-blue-100" : "bg-blue-400"
        } justify-center flex active:bg-gray-200 items-center`}
      >
        {left ? (
          <VscChevronLeft style={{ fontWeight: "bold", fontSize: 30 }} />
        ) : (
          <VscChevronRight style={{ fontWeight: "bold", fontSize: 30 }} />
        )}
      </button>
    </div>
  );
};

export default DirectionalButton;
