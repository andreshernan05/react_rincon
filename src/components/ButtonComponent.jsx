import { Link } from 'react-router-dom';
import './ButtonComponent.css';

export default function ButtonComponent({ nombre }) {
    const route = nombre === "Inicio" ? "/" : `/category/${nombre.toLowerCase().trim()}`;

    return (
        <Link to={route} className="btn btn-dark btn-estilos">
            {nombre}
        </Link>
    );
}