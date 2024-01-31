import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
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
                        <button type="button" className="btn btn-dark" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-dark">{counter}</button>
                        <button type="button" className="btn btn-dark" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-2 w-100">
                    <button type="button" className="btn btn-dark" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;