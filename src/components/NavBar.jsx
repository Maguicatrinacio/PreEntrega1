import LogoHeader from "./LogoHeader";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Link to={"/"}><LogoHeader tamano={120} /></Link>
                </div>
                <div className="col-md-10 d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link fs-5" to={"/productos"}>Productos</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link fs-5" to={"/categoria/paletas"}>Paletas</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link fs-5" to={"/categoria/indumentaria"}>Indumentaria</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link fs-5" to={"/categoria/zapatillas"}>Zapatillas</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link fs-5" to={"/categoria/accesorios"}>Accesorios</NavLink>
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