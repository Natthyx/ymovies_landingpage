import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
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
