import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Swiper from "./Components/Swiper";
import Intro from './Components/Introduction';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
