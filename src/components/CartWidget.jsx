import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import Swal from 'sweetalert2';
import './CartWidget.css';

export default function CartWidget() {
    const { cart, getItemCount } = useCart();

    const handleCartClick = (e) => {
        if (cart.length === 0) {
            e.preventDefault();
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No hay productos en tu carrito',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <Link to="/checkout" className="carrito_estilo" onClick={handleCartClick}>
            <img className="input-group imgCarrito" src="/carrito.png" alt="Carrito de Compras" />
            {getItemCount() > 0 && (
                <span className="input-group-text sp_contador">{getItemCount()}</span>
            )}
        </Link>
    );
}