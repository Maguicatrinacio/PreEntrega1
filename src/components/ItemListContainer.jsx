import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { addDoc, collection, getDoc, getFirestore, query, where, getDocs } from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [mensajeError, setMensajeError] = useState("");
    const {id} = useParams(); 

    /* Llamada a Productos desde el archivo JSON
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;
            
            if (newProductos.length > 0) {
                resolve(newProductos);
            } else {
                reject("¡Error... No se encontraron productos!");
            }
        })

        promesa.then(data => {
            setProductos(data)
        })
        .catch(error => {
            setMensajeError(error);
        })
    }, [id]);
    */
    /* SUBIDA DE PRODUCTOS DEL JSON A FIREBASE A NUESTRA COLECCION 'ITEMS'
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items")

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto)
        })
    }, [])*/

    // Llamada de productos desde firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItem(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <div className="container-fluid container-productos">
            <div className="row">
                {loading ? <Loading /> : <ItemList items={item} />}
            </div>
        </div>
    )
}

export default ItemListContainer;