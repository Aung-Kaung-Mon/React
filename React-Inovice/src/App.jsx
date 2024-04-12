import React, { useState } from "react";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";
import Table from "./components/Table";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CreateForm />
      <Table />
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;
