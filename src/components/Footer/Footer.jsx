import './footer.scss';
import kLetterWhite from '../../assets/icons/K-white.svg';
import logoLetterWhite from '../../assets/icons/logo-white.svg';
import sLetterWhite from '../../assets/icons/S-white.svg';
import aLetterWhite from '../../assets/icons/A-white.svg';

function Footer() {
    return (
        <footer>
            <div>
                <img src={kLetterWhite} alt="logo-K-white-letter"></img>
                <img src={logoLetterWhite} alt="logo-white"></img>
                <img src={sLetterWhite} alt="logo-S-white-letter"></img>
                <img src={aLetterWhite} alt="logo-A-white-letter"></img>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer