import React from "react";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContent from "./components/ItemDetailContent/ItemDetailContent";
import {Cart} from "./components/CartContent/Cart"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:IdCategoria" element={<ItemListContainer/>}/>
          <Route path="/producto/:IdProducto" element={<ItemDetailContent/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      <ItemDetailContent/>
    </>
  );
};

export default App;
