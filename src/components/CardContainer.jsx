import CardUno from "../assets/img/card-zapatillas.jpeg"
import CardDos from "../assets/img/card-indum.jpeg"
import CardTres from "../assets/img/card-paletas.png"
import CardCuatro from "../assets/img/card-accesorios.jpg"
import { Link } from "react-router-dom"


const CardContainer = () => {
    return (
        <div className="container my-5">
            <div className="row my-3">
                <div className="col">
                    <Link to={"/categoria/zapatillas"} className="text-decoration-none"> 
                        <div className="card">
                            <img src={CardUno} className="img-fluid" alt="Card Zapatillas" /> 
                            <div className="card-body text-center">
                                <h4>Zapatillas</h4>
                                <p>Wilson, Bullpadel, Nox, Babolat, Asics, Head, Joma, Lotto, Puma.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/categoria/indumentaria"} className="text-decoration-none">
                        <div className="card">
                            <img src={CardDos} className="img-fluid" alt="Card Indumentaria" /> 
                            <div className="card-body text-center">
                                <h4>Indumentaria</h4>
                                <p>Wilson, Bullpadel, Nox, Babolat, Asics, Head, Joma, Siux, Puma.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={"/categoria/paletas"} className="text-decoration-none">
                        <div className="card">
                            <img src={CardTres} className="img-fluid" alt="Card Paletas" /> 
                            <div className="card-body text-center">
                                <h4>Paletas</h4>
                                <p>Wilson, Starvie, Bullpadel, Siux, Nox, Babolat, Asics, Head, Varlion, Joma, Lotto, Puma.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/categoria/accesorios"} className="text-decoration-none">
                        <div className="card">
                            <img src={CardCuatro} className="img-fluid" alt="Card Accesorios" /> 
                            <div className="card-body text-center">
                                <h4>Accesorios</h4>
                                <p>Wilson, Bullpadel, Nox, Babolat, Starvie, Head.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardContainer;

/*const CardContainer = () => {
    return (
        <div className="container my-5">
            <div className="row my-3">
                <div className="col">
                    <div className="card">
                        <Link to={"/categoria/zapatillas"}> <img src={CardUno} className="img-fluid" alt="Card Zapatillas" /> </Link>
                        <div className="card-body text-center">
                            <h4>Zapatillas</h4>
                            <p>Wilson, Bullpadel, Nox, Babolat, Asics, Head, Joma, Lotto, Puma.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Link to={"/categoria/indumentaria"}> <img src={CardDos} className="img-fluid" alt="Card Indumentaria" /> </Link>
                        <div className="card-body text-center">
                            <h4>Indumentaria</h4>
                            <p>Wilson, Bullpadel, Nox, Babolat, Asics, Head, Joma, Siux, Puma.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <Link to={"/categoria/paletas"}> <img src={CardTres} className="img-fluid" alt="Card Paletas" /> </Link>
                        <div className="card-body text-center">
                            <h4>Paletas</h4>
                            <p>Wilson, Starvie, Bullpadel, Siux, Nox, Babolat, Asics, Head, Varlion, Joma, Lotto, Puma.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Link to={"/categoria/accesorios"}> <img src={CardCuatro} className="img-fluid" alt="Card Accesorios" /> </Link>
                        <div className="card-body text-center">
                            <h4>Accesorios</h4>
                            <p>Wilson, Bullpadel, Nox, Babolat, Starvie, Head.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}*/ 