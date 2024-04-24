import './AnnounceDisplay.scss';


const AnnounceDisplay = (props) => {
    const {announce} = props
  return (
    <div>{announce.title}</div>
  )
}

export default AnnounceDisplay