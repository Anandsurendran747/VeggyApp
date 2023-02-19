import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Products } from "./components/Products";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const SearchContext = React.createContext();
export const CartContext = React.createContext();
function App() {
  const [filterKey, setfilterKey] = useState("");
  const [cart, setcart] = useState([]);
  function changeCart(){
    
  }
  return (
    <div className="App">
      <SearchContext.Provider value={{ filterKey, setfilterKey }}>
        <CartContext.Provider value={{ cart, setcart }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Products />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {/* <Cart/> */}
        </CartContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
