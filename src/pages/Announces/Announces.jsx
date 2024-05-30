import { useContext } from "react";
import { AnnounceContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import AnnounceDisplay from "../../components/AnnounceDisplay/AnnounceDisplay";

function Announces() {
    const {data} = useContext(AnnounceContext)
    const {announceId} = useParams()
    const announce = data.find((e)=> e.id === announceId)
    
    
    return (
       <main className="announce-section">
            <AnnounceDisplay announce={announce}/>
       </main>   
      )
}

export default Announces