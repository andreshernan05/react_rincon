// src/components/NavBar.js
import React from 'react';
import './NavBar.css';
import Logo from './Logo';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
return (
    <nav className="navbar navbar-expand-lg barra">
        <div className="container">
            <Logo/>   
            <div className="d-flex">
                <ButtonComponent nombre="Inicio"/>
                <ButtonComponent nombre="Productos"/>
                <ButtonComponent nombre="Glosario"/>
            </div>
        <CartWidget/>
        </div>
    </nav>
);
}