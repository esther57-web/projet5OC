import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import homeBg from "../../assets/images/accueil-bg-image.jpg";

function Home() {
  return ( 
   <main>
    <Banner title="Chez vous, partout et ailleurs" url={homeBg} />
    <Gallery />
   </main>   
  )
}

export default Home
