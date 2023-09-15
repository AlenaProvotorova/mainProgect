import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

import './index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>главная</Link>
      <Link to={'/about'}>о сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>} />
            <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
 
export default App