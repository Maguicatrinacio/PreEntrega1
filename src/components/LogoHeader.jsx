import Logo from "../assets/img/logo-padelfactory.png"

const LogoHeader = ({tamano}) => {
    return (
        <img src={Logo} alt="Logo Padel Factory" width={tamano} height={tamano} />
        )
}

export default LogoHeader