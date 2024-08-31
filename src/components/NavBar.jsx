import React from 'react';
import './NavBar.css';
import Logo from './Logo';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg barra">
            <div className="container">
                <Logo />
                <div className="d-flex div__list__estilo">
                    <ButtonComponent nombre="Inicio" />
                    <ButtonComponent nombre="TH" />
                    <ButtonComponent nombre="STH" />
                    <ButtonComponent nombre="PREMIUM" />
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}