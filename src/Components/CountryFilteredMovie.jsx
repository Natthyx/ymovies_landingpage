import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import FilteredMovie from "./FilterMovieByCountry";



function Country(){
    const {name} = useParams()
    return(
        <div>
        <Header />
        <FilteredMovie 
            category = {`${name} Movies and TV Shows`}
        />
        <Footer />
        </div>
        
    )
}

export default Country