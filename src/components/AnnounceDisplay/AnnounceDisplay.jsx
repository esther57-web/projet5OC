import './AnnounceDisplay.scss';
import Carousel from '../Carousel/Carousel';

const AnnounceDisplay = (props) => {
    const {announce} = props
  return (
    <div>
      {announce.title}
      <Carousel announce={announce}/>
    </div>
  )
}

export default AnnounceDisplay