import './collapse.scss';
import aboutList from '../../data/collapse';
import React from 'react';


function Collapse() {
    const [isParagraphVisible, setParagraphVisible] = React.useState(Array(aboutList.length).fill(false));

    const toggleParagraph = (index) => {
        const updatedVisibility = [...isParagraphVisible];
        updatedVisibility[index] = !updatedVisibility[index];
        setParagraphVisible(updatedVisibility);
    };

    const aboutElement = aboutList.map((element, index) =>
        <ul key={element.id}>
            <li >
                <h2>{element.title}</h2>
                <img src='./src/assets/icons/arrow-up.svg' alt='dérouler/enrouler le menu' onClick={() => toggleParagraph(index)} ></img>
            </li>
            <p className={isParagraphVisible[index] ? 'visible' : 'none'}>
                {element.content}
            </p>
        </ul>
        
    )
    return (
        <section className='collapse'>
            
            {aboutElement}
            
        </section>
    )
}

export default Collapse