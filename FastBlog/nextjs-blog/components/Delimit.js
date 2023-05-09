import React from "react";

const Delimit = ({ children }) => {
  return (
    <span className="bg-gray-200 px-2 py-1 rounded-md text-black text-base font-mono">
      {children}
    </span>
  );
};

export default Delimit;
