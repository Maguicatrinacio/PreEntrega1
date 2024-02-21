import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";
import trash from "../assets/img/basura.png"
import carritoVacio from "../assets/img/carro-vacio64.png"

const Cart = () => {
    const {cart, removeItem, clear, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);
    
    if (cantTotalProductos() == 0) {
        return (
            <div className="container container-cart">
                <div className="row">
                    <div className="col text-center">
                        <img className="pt-4" src="https://www.macpollo.com/_nuxt/img/carrito_vacio.629e741.png" width={140}/>
                        <p className="pt-2">Tu carrito está vacío</p>
                            <Link to={"/"} className="btn btn-azul my-4">Volver a la Página Principal</Link>
                        </div>
                    </div>
                </div>
            )
        }
    
    return (
        <div className="container container-cart">
            <div className="row">
                <div className="col text-center">
                    <h2 className="h2-carrito">Productos Seleccionados</h2>
                </div>
            </div>
                <div className="productos-carrito">
                    <div className="tabla-detalle">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                </div>
                                <div class="col">
                                    <p>PRODUCTO</p>
                                </div>
                                <div class="col">
                                    <p>PRECIO</p>
                                </div>
                                <div class="col">
                                    <p>CANTIDAD</p>
                                </div>
                                <div class="col">
                                    <p>TOTAL</p>
                                </div>
                                <div class="col">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabla-productos">
                        {cart.map(product =>
                            <div key={product.id} className="tabla-producto">
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col">
                                            <img src={product.imagen} alt={product.titulo} width={130} />
                                        </div>
                                        <div class="col">
                                            <p className="my-5">{product.titulo}</p>
                                        </div>
                                        <div class="col">
                                            <p className="my-5">${product.precio}</p>
                                        </div>
                                        <div class="col">
                                            <p className="my-5">{product.cantidad}</p>
                                        </div>
                                        <div class="col">
                                            <p className="my-5">${product.cantidad * product.precio}</p>
                                        </div>
                                        <div class="col">
                                            <p className="my-5"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" titulo="Eliminar Producto"  /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tabla-total">
                        <p>Suma Total</p>
                        <p>${sumaTotalProductos()}</p>
                    </div>
                </div>
            </div>
        )
    }


export default Cart

/*
<table className="table">
    <tbody>
        {cart.map(product =>
            <tr key={product.id}>
                <td><img src={product.imagen} alt={product.titulo} width={80} /></td>
                <td>{product.titulo}</td>
                <td>${product.precio}</td>
                <td>{product.cantidad}</td>
                <td>${product.cantidad * product.precio}</td>
                <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" titulo="Eliminar Producto"  /></a></td>
            </tr>
        )}
            <tr>
                <td colSpan={4}>Suma Total</td>
                <td>${sumaTotalProductos()}</td>
                <td>&nbsp;</td>
            </tr>
    </tbody>
</table>
*/ 