import './collapse.scss';
import React from 'react';
import arrowUp from '../../assets/icons/arrow-up.svg'
import PropTypes from 'prop-types';

function Collapse({title, content}) {
    
    const [isParagraphVisible, setParagraphVisible] = React.useState(false);

    const toggleParagraph = () => {
        setParagraphVisible(!isParagraphVisible);
    };

    let arrayContent 

    if (content.includes("#@")) {
        content = content.split("#@");
        arrayContent = content
    } else {
        arrayContent = []
        arrayContent.push(content)
    }

    
    console.log(arrayContent)
    return (   
        <ul className='collapse'>
            <li >
                <h2>{title}</h2>
                <img src={arrowUp} alt='dérouler/enrouler le menu' onClick={toggleParagraph} className={isParagraphVisible ? 'down' : ''}></img>
            </li>
            <div className={`p-container ${isParagraphVisible ? 'visible' : 'none'}`}>
                {arrayContent.map((item, index) => (
                    <p key={index} >
                        {item}
                    </p>
                ))}
            </div>
        </ul>
            
       
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

export default Collapse