import { createContext, useContext, useState, useEffect } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../main';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const createOrder = async (buyerInfo) => {
        const order = {
            buyer: buyerInfo,
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toISOString(),
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), order);
            clearCart();
            return docRef.id;
        } catch (error) {
            console.error("Error creando la orden: ", error);
            throw error;
        }
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getItemCount,
            createOrder
        }}>
            {children}
        </CartContext.Provider>
    );
};