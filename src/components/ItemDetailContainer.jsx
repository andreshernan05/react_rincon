import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import './ItemDetailContainer.css';
import ItemCount from './ItemCount';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const db = getFirestore();
            const docRef = doc(db, "productos", id);

            try {
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
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
        return <p>Cargando...</p>;
    }

    const handleAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} productos al carrito`);
    };

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
                    <p>Stock Disponible: {producto.stock}</p>
                    <div className="div__precio">${producto.price}</div>
                    <ItemCount stock={producto.stock} initial={1} product={producto} />
                </div>
            </div>
        </div>
    );
}
