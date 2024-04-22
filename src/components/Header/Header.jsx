import { Link } from 'react-router-dom';

function Header() {
    return <div><Link to="/">accueil</Link><Link to="/annonces/:id">aller à annonces</Link></div>
}

export default Header