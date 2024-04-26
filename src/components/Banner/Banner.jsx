import './Banner.scss';
import PropTypes from 'prop-types';

function Banner({title, url}) {
    return (
        <section style={{ backgroundImage: `url(${url})` }} className="home-banner">
            <h1>{title}</h1>
        </section>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

export default Banner