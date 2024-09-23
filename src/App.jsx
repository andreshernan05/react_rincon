import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/checkout";
import './App.css';

function App() {
  const handleFilter = (productosFiltrados) => {

  };

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar onFilter={handleFilter} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
