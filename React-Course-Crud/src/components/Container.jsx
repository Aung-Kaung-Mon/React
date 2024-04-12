import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" lg:max-w-[900px] xl:max-w-[1150px] py-4 px-2 my-2 mx-auto md:px-8 lg:px-10 ">
      {children}
    </div>
  );
};

export default Container;
