import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import SocialSidebar from "./components/SocialSidebar"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import About from "./views/About"
import NewsPopup from "./components/NewsPopup"
import News from "./views/News"
import { englishNews } from "./data/newsData"
import { sortedNews as sortNews } from "./utility/utility"
import Gallery from "./views/Gallery"
import Games from "./views/Games"
import { gamesData } from "./data/infoGame"
import UnderConstruction from "./views/UnderConstruction"

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
  
  const sortedNews = sortNews(englishNews);

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
          <Route path="/:lang/*"         element={<></>} />
          <Route path="/:lang/news"      element={<News news={sortedNews}/>} /> 
          <Route path="/:lang/games"     element={<Games gamesdata={gamesData}/>} />
          <Route path="/:lang/about"     element={<About/>} />
          <Route path="/:lang/gallery"   element={<Gallery/>} />
          <Route path="/404"          element={<UnderConstruction/>} />
        </Routes>        

        <NewsPopup
          news={[
            {
              date: "11/02/2018",
              title: "Webpage Launch!",
              message: "This is a test",
            },
          ]}
          delayPassed={currentNews}          
        />
        <Footer/>
    </>
  )
}

export default LightWitch