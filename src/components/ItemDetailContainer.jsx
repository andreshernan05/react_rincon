import { getProduct } from "./asyncMock";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(null); // Cambié el estado inicial a null
    const { id } = useParams(); // Asegúrate de usar 'id' en lugar de 'prodid'

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const producto = getProduct(id);
                if (producto) {
                    setProducto(producto);
                } else {
                    console.error("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!producto) {
        return <p>Cargando...</p>; // Mensaje mientras el producto se carga
    }

    return (
        <div className="tarjeta">
            <div className="card__container">
                <div className="div__img">
                    <img className="imagen" src={producto.image} alt={producto.title} />
                </div>
                <div className="div__contenedor">
                    <h3>{producto.title}</h3>
                    <div className="div__row">
                        <p>Blister Nº: {producto.numero}</p>
                        <p>Año: {producto.anio}</p>
                    </div>
                    <div className="div__row">
                        <p>Tipo: {producto.tipo}</p>
                        <p>Edición: {producto.edicion}</p>
                    </div>
                    <p>Variante: {producto.variante}</p>
                    <div className="div__precio">${producto.price}</div>
                </div>
            </div>
        </div>
    );
}