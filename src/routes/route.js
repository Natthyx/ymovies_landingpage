import Home from '../Components/Home';
import Stream from '../Components/Stream';
import Tvshow from '../Components/Tvshow';
import Movies from '../Components/Movies';
import { createBrowserRouter } from 'react-router-dom';

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
      path: "/tvshow/",
      element: <Tvshow />
    }
  ])

export default router