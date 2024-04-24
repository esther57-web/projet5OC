import { useContext } from "react";
import { AnnounceContext } from "../../Context/Context";
import { useParams } from "react-router-dom";

function Announces() {
    const {data} = useContext(AnnounceContext)
    const {announceId} = useParams()
    const announce = data.find((e)=> e.id === Number(announceId))
    return (
       
          
         <h1>Annonces</h1>
      
        
      )
}

export default Announces