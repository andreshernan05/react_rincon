import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import './App.css';
import { getProducts } from './components/asyncMock';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleFilter = (productosFiltrados) => {
    setFilteredProducts(productosFiltrados);
  };

  // Función para mostrar todos los productos
  const showAllProducts = async () => {
    const productos = await getProducts;  // Obtén todos los productos
    setFilteredProducts(productos);
  };

  return (
    <BrowserRouter>
      <NavBar onFilter={handleFilter} onShowAll={showAllProducts} className="container-fluid header" />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;