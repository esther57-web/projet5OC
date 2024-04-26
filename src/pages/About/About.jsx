import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutList from "../../data/collapse";
import './about.scss';
import aboutBg from "../../assets/images/apropos-bg-image.jpg"

function About() {
    return (
        <main>
            <Banner title="" url={aboutBg}/>
            <div className="about-collapse-section">
                {aboutList.map(item => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
            
        </main>
       
    )
}

export default About