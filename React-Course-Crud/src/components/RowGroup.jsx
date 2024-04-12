import React, { useContext } from "react";
import Row from "./Row";
import Loader from "./Loader";
import { DataContext } from "../contexts/DataContextProvider";

const RowGroup = () => {
  const { courses, isReady } = useContext(DataContext);

  return (
    <tbody className="text-base font-medium" id="record-body">
      {!isReady && (
        <>
          <Loader key={1} /> <Loader key={2} /> <Loader key={3} /> <Loader key={4} />
        </>
      )}
      {isReady &&
        courses.map((course, index) => (
          <Row key={course.id} course={course} index={index} />
        ))}
    </tbody>
  );
};

export default RowGroup;
