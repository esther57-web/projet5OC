import './error.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <section className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </section>
        
    )
}

export default Error