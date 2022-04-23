import { ToastContainer } from "react-toastify";
//import { Suspense, lasy } from "react";
//import { Route, Routes } from "react-router-dom";
import Navigation from './Navigation/Navigation'

function App() { 
  return (
    <section>
      <ToastContainer />
      <Navigation/>
    </section>
  )
}

export default App;