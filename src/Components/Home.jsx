import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';
import Swiper from "./Swiper";
import Intro from './Introduction';

function Home(){
    return(
    <div>
      <Header />
      <Swiper />
      <Intro />
      <MovieList 
        category="Trending"
        all = "All"
        movie = "Movie"
        series = "Tv Shows"
      />
      <MovieList 
        category = "Latest Movies"
        type = "movie"
      />
      <MovieList 
        category = "Latest TV Shows"
        type = "series"
      />
      <MovieList 
        category = "Coming Soon"
      />
      <Footer />
    </div>
    )
}

export default Home