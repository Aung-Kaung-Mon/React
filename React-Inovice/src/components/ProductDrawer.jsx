import React, { useContext } from "react";
import DrawerHeader from "./DrawerHeader";
import DrawerGroup from "./DrawerGroup";
import DrawerFrom from "./DrawerFrom";
import { generalContext } from "../contexts/ContextProvider";

const ProductDrawer = () => {
  const { open } = useContext(generalContext);
  return (
    <div
      id="productDrawer"
      className={`h-screen w-96 ${
        !open && " translate-x-full"
      }  flex flex-col   bg-white fixed right-0 shadow-lg overflow-scroll animate__animated animate__slideInRight duration-300 `}
    >
      <DrawerHeader />

      <DrawerGroup />

      <DrawerFrom />
    </div>
  );
};

export default ProductDrawer;
