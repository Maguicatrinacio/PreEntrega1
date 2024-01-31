import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
    return(
        <div className="container">
            <div className="row containerDetail">
                <div className="col-md-4 offset-md-2 d-flex align-items-center">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4 detail">
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                    <div className="agregarCarrito">
                        <h4 className="p-2">${item.precio}</h4>
                        <ItemCount stock={item.stock}/>
                    </div>
                </div>
            </div>
        </div>

    )
} 
export default ItemDetail