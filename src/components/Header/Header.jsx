import { Link, useLocation} from 'react-router-dom';
import '../Header/header.scss';
import { useState, useEffect } from 'react';



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
            <img src='./src/assets/desktop/icons/K.svg' className='k-logo' alt='logo-K-element'></img>
            <img src='./src/assets/desktop/icons/logo-desktop.svg' alt='logo-element'></img>
            <img src='./src/assets/desktop/icons/S.svg' alt='logo-S-element'></img>
            <img src='./src/assets/desktop/icons/A.svg' alt='logo-A-element'></img>
        </div>
        <nav>
            <Link to="/" className={navigation === "Home" ? "underlined" : "no-underline"}>Accueil</Link>
            <Link to="/apropos" className={navigation === "About" ? "underlined" : "no-underline"}>A propos</Link>
        </nav>
    </header>
    )
}

export default Header