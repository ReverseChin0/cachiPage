import { Route, Routes, useLocation } from "react-router-dom"
import SocialSidebar from "./components/SocialSidebar"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect, useRef, useState } from "react"
import About from "./views/About"
import NewsPopup from "./components/NewsPopup"

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
  

  return (
    <>
        <div id="splash" className="splashScreen">
            <img src="img/logos/LW logo color opt.png" alt="no_photo" />
        </div>

        <div id="background-image-div"/>        

        <Navbar setPath={setPath} previous={path}/>
        <SocialSidebar/>
        <Routes>
          <Route path="/*"        element={<p>emptyRouter</p>} />
          <Route path="/EN/home"  element={<p>homeRouter</p>}/>
          <Route path="/EN/about" element={<About/>}/>
          <Route/>
        </Routes>

        <NewsPopup 
          isVisible = {currentNews}
          news={[
              {
                date:"11/02/2018",
                title:"Webpage Launch!",
                message: "This is a test"
              }
          ]}
        />
        <Footer/>
    </>
  )
}

export default LightWitch