import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
    const { cart, createOrder, removeFromCart, updateQuantity } = useCart();
    const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', phone: '' });
    const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (cart.length === 0 && !isCheckoutComplete) {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'Tu carrito está vacío. Serás redirigido a la página de inicio.',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        }
    }, [cart, navigate, isCheckoutComplete]);

    const handleInputChange = (e) => {
        setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
    };

    const handleCheckout = async () => {
        if (!buyerInfo.name || !buyerInfo.email || !buyerInfo.phone) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa toda la información del comprador.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        try {
            setIsCheckoutComplete(true);
            const orderId = await createOrder(buyerInfo);
            Swal.fire({
                title: 'Compra exitosa',
                text: `Tu orden ha sido creada con el ID: ${orderId}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            setIsCheckoutComplete(false);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al crear la orden.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(itemId, newQuantity);
        } else {
            removeFromCart(itemId);
        }
    };

    if (cart.length === 0 && !isCheckoutComplete) {
        return null;
    }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="checkout-form">
                        <h3>Información del comprador</h3>
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" value={buyerInfo.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={buyerInfo.email} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono:</label>
                            <input type="text" id="phone" name="phone" value={buyerInfo.phone} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="cart-summary">
                        <h3>Resumen del carrito</h3>
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.title}</h4>
                                    <p>Precio: ${item.price}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Finalizar compra</button>
        </div>
    );
};

export default Checkout;