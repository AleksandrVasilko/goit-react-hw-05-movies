import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import Cast from './Cast'

const HomePage = lazy(() =>
  import('../views/HomePage')
);

const MoviesPage = lazy(() =>
  import('../views/MoviesPage')
);

const MovieDetailPage = lazy(() =>
  import('../views/MovieDetailPage')
);

function App() { 
  return (
    <section>
      <ToastContainer /> 

      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exapt path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} >
            <Route path='/movies/:id/cast' element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </section>
  )
}

export default App;