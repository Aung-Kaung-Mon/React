import React, { useContext } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Table from "./components/Table";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";


const App = () => {
 
  return (
    <>
      <Container>
        <Header />
        <Table />
      </Container>

      <CreateDrawer />
      <EditDrawer />
    </>
  );
};

export default App;
