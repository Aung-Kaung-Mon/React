import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const CreateBtn = () => {
  const { openCreateDrawer } = useContext(DataContext);
  return (
    <div className="text-center ">
      <button
        onClick={openCreateDrawer}
        className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-right-example"
        data-drawer-show="drawer-right-example"
        data-drawer-placement="right"
        aria-controls="drawer-right-example"
      >
        Create Courses
      </button>
    </div>
  );
};

export default CreateBtn;
