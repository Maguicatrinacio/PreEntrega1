import CardUno from "../assets/img/card-zapatillas.jpeg"
import CardDos from "../assets/img/card-indum.jpeg"
import CardTres from "../assets/img/card-paletas.png"
import CardCuatro from "../assets/img/card-accesorios.jpg"


const CardContainer = () => {
    return (
        <div className="container my-5">
            <div className="row my-3">
                <div className="col">
                    <div className="card">
                        <img src={CardUno} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Zapatillas</h4>
                            <p>Wilson, Bullpadel, Nox, Babolat, Asics, Head, Joma, Lotto, Puma.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={CardDos} className="img-fluid" alt="..." />
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
                        <img src={CardTres} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Paletas</h4>
                            <p>Wilson, Starvie, Bullpadel, Siux, Nox, Babolat, Asics, Head, Varlion, Joma, Lotto, Puma.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={CardCuatro} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Accesorios</h4>
                            <p>Wilson, Bullpadel, Nox, Babolat, Starvie, Head.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer;