import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
    const {id} = useParams(); 

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

    return (
        <div className="container-fluid container-productos">
            <div className="row m-5">
                <ItemList items={productos}/>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center">{mensajeError}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;