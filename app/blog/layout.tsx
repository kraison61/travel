import React from "react";

const layout = ({ children, }:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className="text-3xl relative pt-28 text-blue-950 font-semibold">
        {children}
      </div>
    </div>
  );
};

export default layout;
