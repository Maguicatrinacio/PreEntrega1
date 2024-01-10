import LogoHeader from "./LogoHeader";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <LogoHeader tamano={120} />
                </div>
                <div className="col-md-10 d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item mx-4">
                            <a className="nav-link text-dark fs-5" href="#">Inicio</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link text-dark fs-5" href="#">Paletas</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link text-dark fs-5" href="#">Indumentaria</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link text-dark fs-5" href="#">Zapatillas</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link text-dark fs-5" href="#">Accesorios</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;