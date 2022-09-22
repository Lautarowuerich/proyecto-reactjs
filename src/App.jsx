import React from "react";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContent from "./components/ItemDetailContent/ItemDetailContent";

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer />
      <ItemDetailContent />
    </>
  );
};

export default App;
