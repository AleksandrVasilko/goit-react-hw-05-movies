import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() =>
  import('../views/HomePage')
);

function App() { 
  return (
    <section>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exapt path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </section>
  )
}

export default App;