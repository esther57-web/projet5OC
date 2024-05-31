import './Carousel.scss';
import previous from '../../assets/icons/previous.svg';
import next from '../../assets/icons/next.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
    const {announce} = props
    const carousel = announce.pictures

    let [carouselNav, setCarouselNav] = useState(1)

    const previousSlide = () => {
      if (carouselNav > 1) {
        setCarouselNav(carouselNav - 1);
      } else if (carouselNav === 1) {
        setCarouselNav(carouselNav = carousel.length - 1)
      }  
    }
    
    const nextSlide = () => {
      if (carouselNav < carousel.length - 1) {
        setCarouselNav(carouselNav + 1)
      } else if (carouselNav === carousel.length - 1) {
        setCarouselNav(1)
      }
    }

  return (
    <div className='carousel'>
      <div className='carousel-img-section' >
        {carousel.map((picture, index) => (
          <img className={`carousel-img ${index +1 === carouselNav ? 'visible' : 'none'}`} key={index + 1} src={picture} alt={`Image ${index +1}`} />
        ))}
      </div>
      <div className={`slider-section ${carousel.length === 1 ? 'none' : ''}`}>
        <img className='previous slider' src={previous} onClick={previousSlide} alt={`image précédant ${carouselNav}`}></img>
        <img className='next slider' src={next} onClick={nextSlide} alt={`image suivant ${carouselNav}`}></img>
      </div>
      <p className={`${carousel.length === 1 ? 'none' : ''}`}>{carouselNav} / {carousel.length - 1}</p>
    </div>
  )
}

Carousel.propTypes = {
  announce: PropTypes.object.isRequired,
};

export default Carousel