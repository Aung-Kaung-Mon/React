import React, { useContext } from "react";
import DrawerList from "./DrawerList";
import { generalContext } from "../contexts/ContextProvider";

const DrawerGroup = () => {
  const { products } = useContext(generalContext);
  return (
    <div id="productGroup" className="p-3 overflow-auto flex-grow ">
      {products.map((product) => {
        return <DrawerList key={product.id} product={product} />;
      })}
    </div>
  );
};

export default DrawerGroup;
