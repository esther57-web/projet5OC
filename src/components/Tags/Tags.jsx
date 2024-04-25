import './tags.scss';

const Tags = (props) => {
    const {announce} = props
    const announceTag = announce.tags 
    

  return (
    <div className="tags">
      {announceTag.map((tag, index) => (
        <h4 key={index}>{tag}</h4>
      ))}
    </div>
  )
}

export default Tags