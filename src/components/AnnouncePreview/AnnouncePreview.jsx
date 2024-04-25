import './AnnouncePreview.scss';
import { Link } from 'react-router-dom';

const AnnouncePreview = (props) => {
  return (
    <Link className='announce-preview' to={`/annonces/${props.id}`} key={props.id}>
        <article style={{ backgroundImage: `url(${props.cover})` }}>
            <h2>{props.title}</h2>
        </article>
    </Link>
  )
}

export default AnnouncePreview