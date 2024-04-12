import React, { Children, useState } from "react";
import App from "../App";

export const generalContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 0.5 },
    { id: 2, name: "Banana", price: 0.3 },
    { id: 3, name: "Orange", price: 0.6 },
    { id: 4, name: "Mango", price: 1.2 },
  ]);

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [records, setRecords] = useState([]);

  const createRecord = (newRecord) => {
    const hasExisted = records.find(
      (record) => record.productId === newRecord.productId
    );
    hasExisted
      ? updateRecord(newRecord.productId, newRecord.quantity)
      : setRecords([...records, newRecord]);
  };

  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const updateRecord = (id, number) => {
    setRecords(
      records.map((el) => {
        if (el.productId === id) {
          const newQuantity = el.quantity + number;
          const newCost = newQuantity * el.price;
          return { ...el, quantity: newQuantity, cost: newCost };
        }
        return el;
      })
    );
  };

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <generalContext.Provider
      value={{
        open,
        toggleOpen,
        products,
        createRecord,
        records,
        removeRecord,
        updateRecord,
        createProduct,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export default ContextProvider;
