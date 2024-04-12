import React, { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const Row = ({ course: { id, title, short_name, fee }, index }) => {
  const editBtnRef = useRef(null);
  const delBtnRef = useRef(null);
  const { destroyCourse, toggleEditDrawer, defineEditCourse } =
    useContext(DataContext);

  const handleDelBtn = async () => {
    delBtnRef.current.disabled = true;
    const res = await fetch("http://localhost:5173/api/courses/" + id, {
      method: "DELETE",
      redirect: "follow",
    });

    destroyCourse(id);
  };

  const handleEditBtn = async () => {
    editBtnRef.current.disabled = true;
    const res = await fetch("http://localhost:5173/api/courses/" + id);
    const result = await res.json();
    defineEditCourse(result);
    toggleEditDrawer();
    editBtnRef.current.disabled = false;
  };

  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 row"
      data-id={id}
    >
      <th
        scope="row"
        className="px-6 py-4 id font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4 title">{title}</td>
      <td className="px-6 py-4 short-name text-center">{short_name}</td>
      <td className="px-6 py-4 text-end fee">{fee}</td>
      <td className="px-6 py-4 flex justify-center items-center gap-2">
        <button
          ref={editBtnRef}
          onClick={handleEditBtn}
          type="button"
          className="text-white group edit-btn bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none group-disabled:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          <svg
            className="animate-spin hidden group-disabled:block h-5 w-5 rounded-full border-2 border-neutral-100 border-l-white bg-transparent"
            viewBox="0 0 24 24"
          />
        </button>
        <button
          ref={delBtnRef}
          onClick={handleDelBtn}
          type="button"
          className="text-white del-btn group bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none group-disabled:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <svg
            className="animate-spin hidden group-disabled:block h-5 w-5 rounded-full border-2 border-neutral-100 border-l-white bg-transparent"
            viewBox="0 0 24 24"
          />
        </button>
      </td>
    </tr>
  );
};

export default Row;
