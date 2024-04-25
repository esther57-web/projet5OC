import './AnnounceDisplay.scss';
import Carousel from '../Carousel/Carousel';
import Rating from '../Rating/Rating';
import Tags from '../Tags/Tags';
import PropTypes from 'prop-types';

const AnnounceDisplay = (props) => {
    const {announce} = props
    const [firstName, lastName] = announce.host.name.split(' ');
  return (
    <div>
      <Carousel announce={announce}/>
      <div className={`announce-content ${announce.pictures.length === 1 ? '' : 'up'}`}>
        <div className='content-info'>
          <h1>{announce.title}</h1>
          <h3>{announce.location}</h3>
          <Tags announce={announce}/>
        </div>
        <div className='host'>
          <div className='host-info'>
            <h2>{firstName}<br/>{lastName}</h2>
            <img src={announce.host.picture} alt={`photo de ${announce.host.name}`}></img>
          </div>
          <Rating announce={announce} />
        </div>
      </div>
    </div>
  )
}

AnnounceDisplay.propTypes = {
  announce: PropTypes.object.isRequired,
};


export default AnnounceDisplay