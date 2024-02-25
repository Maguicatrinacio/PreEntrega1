import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) =>{
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }

    return(
        <div className="container">
            <div className="row containerDetail">
                <div className="col-lg-4  d-flex">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" width={450} />
                </div>
                <div className="col-lg-8 py-5 detail">
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                    <div className="agregarCarrito">
                        <h4 className="p-2">${item.precio}</h4>
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>

    )
} 
export default ItemDetail