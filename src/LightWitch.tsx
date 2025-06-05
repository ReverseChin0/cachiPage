import { Route, Routes, useLocation } from "react-router-dom"
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

const newsPopupTimerMs = 2500;

const LightWitch = () => {

  const [ currentNews, setNewspopup ] = useState(false);
  const [ path, setPath ] = useState("");
  const [ language, setLanguage ] = useState("EN");

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

        <Navbar setPath={setPath} previous={path}/>

        <SocialSidebar/>

        <Routes>
          <Route path="/*"            element={<></>}  />          
          <Route path="/EN/news"      element={<News news={sortedNews}/>}/>
          <Route path="/EN/games"     element={<Games/>}/>
          <Route path="/EN/about"     element={<About/>}/>
          <Route path="/EN/gallery"   element={<Gallery/>}/>          
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
          isOnMainPage={path === '/' || path === ''}
        />
        <Footer/>
    </>
  )
}

export default LightWitch