import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";

function Movies(){
    return(
        <div>
            <Header/>
            <MovieList 
                category = 'Popular Movies'
                type = 'movie'
            />
            <Footer />
        </div>
    )
}

export default Movies;