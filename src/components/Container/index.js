import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-7xl  my-0 mx-auto rounded bg-slate-50 shadow-md">
      {children}
    </div>
  );
};

export default Container;
