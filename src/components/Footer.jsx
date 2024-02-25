import Whatsapp from "../assets/img/whatsapp-logo2.png"
import Instagram from "../assets/img/instagram-logo2.png"
import Twitter from "../assets/img/twitter-logo2.png"
import Facebook from "../assets/img/facebook-logo2.png"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return(
        <div className="container-fluid  footer">
                <div className="row">
                    <div className="col redes-iconos d-flex justify-content-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={Whatsapp} alt="Logo Whatsapp" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={Twitter} alt="Logo Twitter" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#"><img src={Facebook} alt="Logo Facebook" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-nav d-flex justify-content-center">
                        <ul className="nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link a-ftr" href="#">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link a-ftr" href="#">Nosotros</a>
                                </li>
                            </ul>
                    </div>
                    <div className="footer-bottom d-flex justify-content-center">
                        <p>Copyright &copy; 2024 | Designed by <span className="designer">PadelFactory</span></p>
                    </div>
                </div>
            </div>
    )
}

export default Footer