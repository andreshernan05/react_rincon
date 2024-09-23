import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";

export const getProducts = async () => {
  const db = getFirestore();
  const productsCollection = collection(db, "productos");
  try {
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productsList;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}; 3


export const getProduct = async (id) => {
  const db = getFirestore();
  const productDoc = doc(db, "productos", id);
  try {
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      console.error("Producto no encontrado");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};

export const getCategory = async (tipo) => {
  const db = getFirestore();
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, where("category", "==", tipo));
  try {
    const querySnapshot = await getDocs(q);
    const filteredProducts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return filteredProducts;
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    return [];
  }
};

export const saveOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "ordenes"), order);
    console.log("Orden registrada con ID: ", docRef.id);
  } catch (e) {
    console.error("Error agregando la orden: ", e);
  }
};