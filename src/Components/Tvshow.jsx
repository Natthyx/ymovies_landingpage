import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";

function TVshow(){
    return(
        <div>
            <Header/>
            <MovieList 
                category = 'Popular TV Shows'
                type = 'series'
            />
            <Footer />
        </div>
    )
}

export default TVshow;