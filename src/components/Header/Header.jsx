import { Link, useLocation} from 'react-router-dom';
import '../Header/header.scss';
import { useState, useEffect } from 'react';
import kLetter from '../../assets/desktop/icons/K.svg'
import logoLetter from '../../assets/desktop/icons/logo-desktop.svg'
import sLetter from '../../assets/desktop/icons/S.svg'
import aLetter from '../../assets/desktop/icons/A.svg'


function Header() {
    const location = useLocation();
    const [navigation, setNavigation] = useState("");

    useEffect(() => {
        if (location.pathname === "/") {
            setNavigation("Home");
        } else if (location.pathname === "/apropos") {
            setNavigation("About");
        } else {
            setNavigation("")
        }
    }, [location]);

    return (
    <header>
        <div className='logo'>
            <img src={kLetter} className='k-logo' alt='logo-K-element'></img>
            <img src={logoLetter} alt='logo-element'></img>
            <img src={sLetter} alt='logo-S-element'></img>
            <img src={aLetter} alt='logo-A-element'></img>
        </div>
        <nav>
            <Link to="/" className={navigation === "Home" ? "underlined" : "no-underline"}>Accueil</Link>
            <Link to="/apropos" className={navigation === "About" ? "underlined" : "no-underline"}>A propos</Link>
        </nav>
    </header>
    )
}

export default Header