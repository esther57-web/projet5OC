import { Link } from 'react-router-dom';
import '../Header/header.scss';
import { useState } from 'react';

function Header() {
    const [navigation, setNavigation] = useState("Home");

    
    return (
    <header>
        <div className='logo'>
            <img src='./src/assets/desktop/icons/K.svg' alt='logo-K-element'></img>
            <img src='./src/assets/desktop/icons/logo-desktop.svg' alt='logo-element'></img>
            <img src='./src/assets/desktop/icons/S.svg' alt='logo-S-element'></img>
            <img src='./src/assets/desktop/icons/A.svg' alt='logo-A-element'></img>
        </div>
        <nav>
            <Link to="/" className={navigation === "Home" ? "underlined" : "no-underline"} onClick={() => setNavigation("Home")}>Accueil</Link>
            <Link to="/apropos" className={navigation === "About" ? "underlined" : "no-underline"} onClick={() => setNavigation("About")}>A propos</Link>
        </nav>
    </header>
    )
}

export default Header