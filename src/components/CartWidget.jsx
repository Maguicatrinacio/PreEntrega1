import Cart from "../assets/img/carrito-de-compras.png"

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-light position-relative">
            <img src={Cart} alt="carrito de compras" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget