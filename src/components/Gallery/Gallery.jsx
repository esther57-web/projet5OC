import './Gallery.scss';
import data from '../../data/logements.json'
import { Link } from 'react-router-dom';

function Gallery() {
    
    const announceList = data.map((announce) =>
        <Link to={`/annonces/${announce.id}`} key={announce.id}>
            <article style={{ backgroundImage: `url(${announce.cover})` }}>
                <h2>{announce.title}</h2>
            </article>
        </Link>
    );
    return (
        <section className="gallery">
            {announceList}
        </section>
    )
}

export default Gallery