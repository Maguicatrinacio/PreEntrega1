import Logo from "../assets/img/logo-padelfactory2.png"

const LogoHeader = ({tamano}) => {
    return (
        <img src={Logo} alt="Logo Padel Factory"  height={tamano} />
        )
}

export default LogoHeader