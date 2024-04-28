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
        catagory="Trending"
        movie = "Movie"
        series = "Tv Shows"
      />
      <MovieList 
        catagory = "Latest Movies"
      />
      <MovieList 
        catagory = "Coming Soon"
      />
      <Footer />
    </div>
    )
}

export default Home