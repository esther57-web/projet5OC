import './rating.scss';
import redStar from '../../assets/icons/red-star.svg';
import greyStar from '../../assets/icons/grey-star.svg';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const {announce} = props
  const rate = parseInt(announce.rating)
  const noRate = 5 - rate


  
  return (
    <div className='rating'>
      {Array(rate).fill().map((_, index) => (
        <img key={index} src={redStar} alt='étoile rouge'/>
      ))}
      {Array(noRate).fill().map((_, index) => (
        <img key={index} src={greyStar} alt='étoile rouge'/>
      ))}
    </div>
  )
}

Rating.propTypes = {
  announce: PropTypes.object.isRequired,
};

export default Rating