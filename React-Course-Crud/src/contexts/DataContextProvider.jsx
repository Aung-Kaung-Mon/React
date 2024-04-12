import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

import React from "react";

const DataContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editCourse, setEditCourse] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses/");
      const result = await res.json();
      setCourses(result);
      setIsReady(true);
    };
    fetchCourses();
  }, []);

  const createCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const destroyCourse = (id) => {
    setCourses(courses.filter((course) => course.id != id));
  };

  const updateCourse = (id, updateCourse) => {
    setCourses(
      courses.map((course) => {
        if (course.id === id) {
          return updateCourse;
        }
        return course;
      })
    );
  };

  const openCreateDrawer = () => {
    setCreate(true);
  };

  const closeCreateDrawer = () => {
    setCreate(false);
  };

  const toggleEditDrawer = () => {
    setEdit(!edit);
  };

  const defineEditCourse = (course) => {
    setEditCourse(course);
  };

  return (
    <DataContext.Provider
      value={{
        courses,
        createCourse,
        isReady,
        create,
        openCreateDrawer,
        closeCreateDrawer,
        destroyCourse,
        edit,
        toggleEditDrawer,
        editCourse,
        defineEditCourse,
        updateCourse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
