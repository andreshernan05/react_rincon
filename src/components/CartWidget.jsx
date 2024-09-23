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
            <img className="input-group imgCarrito" src="https://firebasestorage.googleapis.com/v0/b/rincon-coleccionista.appspot.com/o/carrito.png?alt=media&token=0dfa9303-75d7-4ba3-af08-8fe3811d5c7e" alt="Carrito de Compras" />
            {getItemCount() > 0 && (
                <span className="input-group-text sp_contador">{getItemCount()}</span>
            )}
        </Link>
    );
}