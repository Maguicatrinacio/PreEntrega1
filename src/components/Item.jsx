import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
        <div className="col-md-6 col-sm-12 col-lg-3 text-center">
            <Link to={"/item/"+ item.id} className="text-decoration-none">
                <div className="card cardProductos">
                    <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                    <div className="card-body">
                        <h3 className="card-text">{item.titulo}</h3>
                        <p className="card-text ">${item.precio}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;