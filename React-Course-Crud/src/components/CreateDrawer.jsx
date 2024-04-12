import React, { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContextProvider";

const CreateDrawer = () => {
  const { create, closeCreateDrawer, createCourse } = useContext(DataContext);
  const formRef = useRef(null);
  const checkboxRef = useRef(null);
  const createBtnRef = useRef(null);

  const handleCreateForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const newCourse = {
      title: formData.get("title"),
      short_name: formData.get("short_name"),
      fee: formData.get("fee"),
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newCourse);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    createBtnRef.current.disabled = true;

    const res = await fetch(
      "http://localhost:5173/api/courses",
      requestOptions
    );

    const result = await res.json();

    if (res.status === 201) {
      createCourse(result);
      checkboxRef.current.checked && closeCreateDrawer();
      createBtnRef.current.disabled = false;
      formRef.current.reset();
    }
  };

  return (
    <div
      id="drawer-right-example"
      className={`fixed shadow top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform duration-300  bg-white w-96 ${
        !create && "translate-x-full"
      }`}
      tabIndex={-2}
      aria-labelledby="drawer-right-label"
      aria-hidden="true"
    >
      <div className="mb-4">
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Course Create Form
        </h5>
        <button
          type="button"
          onClick={closeCreateDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3 pointer-events-none"
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
        <form id="create-form" ref={formRef} onSubmit={handleCreateForm}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="short-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Short Name
            </label>
            <input
              required
              type="text"
              id="short-name"
              name="short_name"
              className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="fee"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fee
            </label>
            <input
              required
              type="number"
              id="fee"
              name="fee"
              className="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-start">
            <div className=" flex gap-2 items-center text-sm">
              <input
                type="checkbox"
                ref={checkboxRef}
                name="is_close"
                id="isClose"
              />
              <label htmlFor="isClose">close after save</label>
            </div>
            <button
              type="submit"
              ref={createBtnRef}
              className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-7 py-2.5  block ms-auto group"
            >
              <span className=" group-disabled:hidden">Create</span>
              <div className=" hidden group-disabled:flex justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 rounded-full border-2 border-neutral-100 border-l-white bg-transparent  "
                  viewBox="0 0 24 24"
                />
                Loading..
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDrawer;
