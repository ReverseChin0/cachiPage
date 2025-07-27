import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import SocialSidebar from "./components/SocialSidebar"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import About from "./views/About"
import NewsPopup from "./components/NewsPopup"
import News from "./views/News"
import { sortedNews as sortNews } from "./utility/utility"
import Gallery from "./views/Gallery"
import Games from "./views/Games"
import UnderConstruction from "./views/UnderConstruction"
import { newsDataLocalized } from "./data/newsData"

const newsPopupTimerMs = 2500;

const LightWitch = () => {

  const [ currentNews, setNewspopup ] = useState(false);    

  let location = useLocation();

  useEffect(() => {
    
    const timeoutNewsPopup = setTimeout(() => {
      setNewspopup(true);
    }, newsPopupTimerMs)

    if(location.pathname !== "/"){      
      document.getElementById("splash")?.classList.add("hide-navbar");
    }
  
    return () => {
      clearTimeout(timeoutNewsPopup);
    }
  }, [])  
  
  const sortedNews = sortNews(newsDataLocalized);

  return (
    <>
        <div id="splash" className="splashScreen">
            <img src="img/logos/LW logo color opt.png" alt="no_photo" />
        </div>

        <div id="background-image-div"/>

        <Navbar/>

        <SocialSidebar/>

        <Routes>
          <Route path="/*"               element={<Navigate to="/EN" replace />} />
          <Route path="/:lang/news"      element={<News news={sortedNews}/>} /> 
          <Route path="/:lang/games"     element={<Games/>} />
          <Route path="/:lang/about"     element={<About/>} />
          <Route path="/:lang/gallery"   element={<Gallery/>} />
          <Route path="/404"             element={<UnderConstruction/>} />
          <Route path="/:lang/*"         element={<></>} />
        </Routes>        

        <NewsPopup
          news={sortedNews[0]}
          delayPassed={currentNews}          
        />
        <Footer/>
    </>
  )
}

export default LightWitch