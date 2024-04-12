import React, { useContext } from "react";
import Empty from "./Empty";
import List from "./List";
import { generalContext } from "../contexts/ContextProvider";

const TableGroup = () => {
  const { records } = useContext(generalContext);
  return (
    <tbody id="recordGroup">
      <Empty />
      {records.map((record, index) => {
        return <List key={record.id} index={index} record={record} />;
      })}
    </tbody>
  );
};

export default TableGroup;
