import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutList from "../../data/collapse";

function About() {
    return (
        <main>
            <AboutBanner />
            <div className="about-collapse-section">
                {aboutList.map(item => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
            
        </main>
       
    )
}

export default About