import LogoHeader from "./LogoHeader";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
            <div className="container mx-5">
                <Link to={"/"} className="navbar-brand" href="#"><LogoHeader tamano={100} /></Link>
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Link to={"/"} className="offcanvas-title" id="offcanvasNavbarLabel"><LogoHeader tamano={90} /></Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0 ">
                        <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to={"/productos"}>PRODUCTOS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to={"/categoria/paletas"}>PALETAS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to={"/categoria/indumentaria"}>INDUMENTARIA</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to={"/categoria/zapatillas"}>ZAPATILLAS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to={"/categoria/accesorios"}>ACCESORIOS</NavLink>
                            </li>
                        </ul>
                        <div className="px-3 py-0 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 cart-widget">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

    export default NavBar;