import React from "react";

const DrawerList = ({ product: { name, price } }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center mb-3">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default DrawerList;
