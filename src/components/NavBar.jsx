import React from 'react';
import './NavBar.css';
import Logo from './Logo';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar({ onFilter }) {
    return (
        <nav className="navbar navbar-expand-lg barra">
            <div className="container">
                <Logo />
                <div className="div__list__estilo">
                    <ButtonComponent nombre="Inicio" onFilter={() => onFilter(null)} />
                    <ButtonComponent nombre="TH" onFilter={() => onFilter("TH")} />
                    <ButtonComponent nombre="STH" onFilter={() => onFilter("STH")} />
                    <ButtonComponent nombre="PREMIUM" onFilter={() => onFilter("PREMIUM")} />
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}
