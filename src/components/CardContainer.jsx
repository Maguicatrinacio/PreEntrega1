import CardUno from "../assets/img/card-zapatillas.jpeg"
import CardDos from "../assets/img/card-indum.jpeg"
import CardTres from "../assets/img/card-paletas.png"
import CardCuatro from "../assets/img/card-accesorios.jpg"
import { Link } from "react-router-dom"


const CardContainer = () => {
    return (
        <div className="container my-5 cards-inicio">
            <div className="row my-3">
                <div className="col">
                    <Link to={"/categoria/zapatillas"} className="text-decoration-none a-card "> 
                        <div className="card">
                            <img src={CardUno} className="img-fluid" alt="Card Zapatillas" /> 
                            <div className="card-body text-center">
                                <h3>Zapatillas</h3>
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
                                <h3>Indumentaria</h3>
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
                                <h3>Paletas</h3>
                                <p>Wilson, Starvie, Bullpadel, Siux, Nox, Babolat, Asics, Head, Lotto, Puma.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/categoria/accesorios"} className="text-decoration-none">
                        <div className="card">
                            <img src={CardCuatro} className="img-fluid" alt="Card Accesorios" /> 
                            <div className="card-body text-center">
                                <h3>Accesorios</h3>
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