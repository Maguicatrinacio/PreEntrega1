import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            Swal.fire({
                title: 'Producto agregado al carrito',
                text: "Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " disponibles.",
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    }

    useEffect(() =>{
        setItemStock(stock)
    }, [stock])

    return (
        <>
            <div className="row my-1">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-azul" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-azul">{counter}</button>
                        <button type="button" className="btn btn-azul" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-2 w-100">
                    {itemAdded? <Link to={"/cart"} className="btn btn-azul">Finalizar Compra</Link> :
                    <button type="button" className="btn btn-azul" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </>
    )
}

export default ItemCount;