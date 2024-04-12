import React from "react";

const Loader = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  ">
      <th
        scope="row"
        className="px-6 py-4 animate-pulse font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="  w-4 h-4 bg-neutral-400"></div>
      </th>
      <td className="px-6 py-4 title  animate-pulse">
        <div className="  h-2 rounded-md bg-neutral-400"></div>
        <div className="  h-2 rounded-md bg-neutral-400"></div>
      </td>
      <td className="px-6 py-4 short-name   animate-pulse">
        <div className=" h-2 rounded-md bg-neutral-400"></div>
        <div className=" h-2 rounded-md bg-neutral-400"></div>
      </td>
      <td className="px-6 py-4  fee animate-pulse ">
        <div className=" h-2 rounded-md bg-neutral-400"></div>
        <div className=" h-2 rounded-md bg-neutral-400"></div>
      </td>
      <td className="px-6 py-4 animate-pulse flex justify-center items-center gap-2">
        <div className=" w-5 h-5  bg-neutral-400 rounded-lg"></div>
        <div className=" w-5 h-5 bg-neutral-400 rounded-lg"></div>
      </td>
    </tr>
  );
};

export default Loader;
