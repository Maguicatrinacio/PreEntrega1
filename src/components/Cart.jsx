import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";
import trash from "../assets/img/basura.png"
import trash2 from "../assets/img/basura2.png"


const Cart = () => {
    const {cart, removeItem, clear, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);
    
    if (cantTotalProductos() == 0) {
        return (
            <div className="container container-cart py-2">
                <div className="row">
                    <div className="col text-center">
                        <img className="pt-3" src="https://www.macpollo.com/_nuxt/img/carrito_vacio.629e741.png" width={140}/>
                        <p className="pt-4 text-secondary">Tu carrito está vacío</p>
                            <Link to={"/"} className="btn btn-celeste my-3">Volver a la Página Principal</Link>
                        </div>
                    </div>
                </div>
            )
        }
    
    return (
        <div className="container container-cart">
            <div className="row">
                <div className="col text-center">
                    <h2 className="titulos">PRODUCTOS SELECCIONADOS</h2>
                </div>
            </div>
                <div className="productos-carrito">
                    <div className="tabla-detalle">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"><p>PRODUCTO</p></div>
                                <div className="col"><p>PRECIO</p></div>
                                <div className="col"><p>CANTIDAD</p></div>
                                <div className="col"><p>TOTAL</p></div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </div>
                    <div className="tabla-productos">
                        {cart.map(product =>
                            <div key={product.id} className="tabla-producto">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col">
                                            <img src={product.imagen} alt={product.titulo} width={130} className="carrito-img" />
                                        </div>
                                        <div className="col">
                                            <p className="my-5">{product.titulo}</p>
                                        </div>
                                        <div className="col">
                                            <p className="my-5">${product.precio}</p>
                                        </div>
                                        <div className="col">
                                            <p className="my-5">{product.cantidad}</p>
                                        </div>
                                        <div className="col">
                                            <p className="my-5">${product.cantidad * product.precio}</p>
                                        </div>
                                        <div className="col">
                                            <p className="my-5"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" titulo="Eliminar Producto"  /></a></p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            
                        )}
                    </div>
                    <div className="tabla-total row">
                        <div className="col col-lg-2">
                            <div className="text-center" colSpan={1}><a href="#" onClick={clear} className="btn btn-secondary btn-sm">VACIAR CARRITO <img src={trash2} alt="Eliminar Producto" title="Eliminar Producto" /></a></div>
                        </div>
                        <div className="col col-lg-1"></div>
                        <div className="col col-lg-1"></div>
                        <div className="col col-lg-3">
                            <p className="p-total text-center my-1"> TOTAL ${sumaTotalProductos()}</p>
                        </div>
                        <div className="col col-lg-2">
                            <div className="text-center" colSpan={5}><Link to={"/checkout"} className="btn btn-celeste btn-sm">INICIAR COMPRA</Link></div>
                        </div>
                        <div className="col col-lg-2">
                            <div className="text-center" colSpan={6}><Link to={"/productos"} className="btn btn-secondary btn-sm">SEGUIR COMPRANDO</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Cart