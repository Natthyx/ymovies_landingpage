import Home from '../Components/Home';
import Stream from '../Components/Stream';
import Movies from '../Components/Movies';
import Tvshow from '../Components/Tvshow'
import { createBrowserRouter } from 'react-router-dom';
import GenreFilterdMovie from '../Components/GenreFilteredMovie';
import CountryFilteredMovie from '../Components/CountryFilteredMovie'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie/",
      element: <Movies />
    },
    {
      path:"/stream/:id",
      element: <Stream />
    },
    {
      path:"/tvshow/",
      element: <Tvshow />
    },
    {
      path:"/genre/:name",
      element: <GenreFilterdMovie />
    },
    {
      path:"/country/:name",
      element: <CountryFilteredMovie />
    }
  ])

export default router