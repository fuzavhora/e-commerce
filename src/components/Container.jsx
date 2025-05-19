import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div className={`w-full max-w-[1200px] px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
