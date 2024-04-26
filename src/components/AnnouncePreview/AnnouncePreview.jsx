import './AnnouncePreview.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const AnnouncePreview = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Link className='announce-preview' to={`/annonces/${props.id}`} key={props.id} onClick={handleClick}>
        <article style={{ backgroundImage: `url(${props.cover})` }}>
            <h2>{props.title}</h2>
        </article>
    </Link>
  )
}

AnnouncePreview.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AnnouncePreview