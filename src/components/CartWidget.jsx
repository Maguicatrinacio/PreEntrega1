import { useContext } from "react"
import Cart from "../assets/img/carrito-de-compras2.png"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantTotalProductos} = useContext(CartContext);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light position-relative button-carrito">
                <img src={Cart} alt="carrito de compras" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantTotalProductos()} </span>
            </button>
        </Link>
    )
}

export default CartWidget