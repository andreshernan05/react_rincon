import React, { useState } from 'react';
import { useCart } from './CartContext';
import Swal from 'sweetalert2';
import './ItemCount.css';

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && product) {
      addToCart(product, count);
      Swal.fire({
        title: 'Producto agregado',
        text: `Has agregado ${count} productos al carrito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      </div>
      <button className='ov-btn-grow-ellipse' onClick={handleAdd} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;