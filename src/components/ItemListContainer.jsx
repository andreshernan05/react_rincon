import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getCategory } from './asyncMock';
import Cards from './Cards';
import './ItemListContainer.css'

export default function ItemListContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (id) {
                // Si hay un ID de categoría en la URL, filtrar los productos
                try {
                    const productosFiltrados = await getCategory(id);
                    setProducts(productosFiltrados);
                } catch (error) {
                    console.error("Error al obtener productos por categoría:", error);
                }
            } else {
                // Si no hay ID, obtener todos los productos
                try {
                    const todosLosProductos = await getProducts;
                    setProducts(todosLosProductos);
                } catch (error) {
                    console.error("Error al obtener todos los productos:", error);
                }
            }
        };

        fetchProducts();
    }, [id]);

    return (
        <>
            <div className="container div__container">
                <div className="row">
                    {products.map((prod) => (
                        <Cards
                            key={prod.id}
                            title={prod.title}
                            price={prod.price}
                            image={prod.image}
                            idProd={prod.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}