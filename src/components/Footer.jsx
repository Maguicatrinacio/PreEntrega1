import Whatsapp from "../assets/img/whatsapp-logo.png"
import Instagram from "../assets/img/instagram-logo.png"
import Twitter from "../assets/img/twitter-logo.png"
import Facebook from "../assets/img/facebook-logo.png"

const Footer = () => {
    return(
        <div className="container my-3 d-flex justify-content-end">
                <div className="row my-3">
                    <div className="col">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#"><img src={Whatsapp} alt="Logo Whatsapp" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#"><img src={Twitter} alt="Logo Twitter" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#"><img src={Facebook} alt="Logo Facebook" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Footer