import React, { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const EditDrawer = () => {
  const {
    edit,
    toggleEditDrawer,
    editCourse: { id, title, short_name, fee },
    updateCourse,
  } = useContext(DataContext);
  const formRef = useRef(null);
  const updateBtnRef = useRef(null);

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const updatedCourse = {
      title: formData.get("edit_title"),
      short_name: formData.get("edit_short_name"),
      fee: formData.get("edit_fee"),
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(updatedCourse),
      redirect: "follow",
    };

    updateBtnRef.current.disabled = true;

    const res = await fetch(
      "http://localhost:5173/api/courses/" + id,
      requestOptions
    );
    const result = await res.json();

    updateCourse(id, result);
    toggleEditDrawer();
  };
  return (
    edit && (
      <div
        id="edit-drawer"
        className="fixed top-0 right-0 z-40 shadow h-screen p-4 overflow-y-auto animate__animated animate__slideInRight animate__faster duration-75 bg-white w-96 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby
        aria-hidden="true"
      >
        <div>
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Course Edit Form
          </h5>
          <button
            type="button"
            onClick={toggleEditDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div>
          <form ref={formRef} id="edit-form" onSubmit={handleUpdateForm}>
            <input type="hidden" value={id} id="edit-id" />
            <div className="mb-4">
              <label
                htmlFor="edit-title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                required
                defaultValue={title}
                type="text"
                id="edit-title"
                name="edit_title"
                className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-short-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Short Name
              </label>
              <input
                required
                defaultValue={short_name}
                type="text"
                id="edit-short-name"
                name="edit_short_name"
                className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="edit-fee"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fee
              </label>
              <input
                required
                defaultValue={fee}
                type="number"
                id="edit-fee"
                name="edit_fee"
                className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              ref={updateBtnRef}
              className="text-white group bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-7 py-2.5 block ms-auto"
            >
             <span className=" group-disabled:hidden">Update</span>
              <div className=" hidden group-disabled:flex justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 rounded-full border-2 border-neutral-100 border-l-white bg-transparent  "
                  viewBox="0 0 24 24"
                />
                Loading..
              </div>
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditDrawer;
