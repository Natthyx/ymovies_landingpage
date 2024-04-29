import Header from "./Header";
import Footer from "./Footer";
import FilteredMovie from "./FilterMovieByGenre";
import { useParams } from "react-router-dom";



function Genre(){
    const {name} = useParams()
    // const namestring = String(name);
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

export default Genre