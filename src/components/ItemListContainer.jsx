import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from './Cards';
import './ItemListContainer.css';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const productsCollection = collection(db, "productos");

            try {
                let productosSnapshot;

                if (id) {
                    const q = query(productsCollection, where("tipo", "==", id));
                    productosSnapshot = await getDocs(q);
                } else {
                    productosSnapshot = await getDocs(productsCollection);
                }

                const productosList = productosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(productosList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, [id]);

    return (
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
    );
}
