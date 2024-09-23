import { Link } from 'react-router-dom';
import './ButtonComponent.css';

export default function ButtonComponent({ nombre, onFilter }) {
    const route = nombre === "Inicio" ? "/" : `/category/${nombre.toLowerCase().trim()}`;

    return (
        <Link to={route} className="btn-estilos" onClick={onFilter}>
            {nombre}
        </Link>
    );
}
