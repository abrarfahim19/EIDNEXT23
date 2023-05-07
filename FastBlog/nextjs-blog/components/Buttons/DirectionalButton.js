import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
const DirectionalButton = (props) => {
  console.log("Props is:", props);
  const { left, handleClick } = props;
  return (
    <div
      onClick={handleClick}
      className=" w-10 h-10 bg-red-100 justify-center flex items-center"
    >
      {left ? <VscChevronLeft /> : <VscChevronRight />}
    </div>
  );
};

export default DirectionalButton;
