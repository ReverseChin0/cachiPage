import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getCurrentLanguage } from '../utility/utility'
import '../styles/Navbar.css'
import { navTitles } from '../data/navData'

const Navbar = () => {

  const lang = getCurrentLanguage(); //EN ES FR JP
  const loc = useLocation();
      
  let navigate = useNavigate();

  const [mobileShow,setMobileShow] = useState(false);
  
  useEffect(() => {               
    const sections = ["news","games","about","gallery"]
    const lastSegment = loc.pathname.split("/").pop();
    
    if(sections.includes(lastSegment?lastSegment:"")) { //if we are in a section
      document.getElementById("interactable-navbar")?.classList.add("show-navbar");
      const backgroundDiv = document.getElementById("background-image-div");      
      backgroundDiv?.classList.add("blur"); 
    }    

  }, [])

  function GoToRoute(Route:string){
    const newRoute = `/${lang}/${Route}`;
    //console.log("GoToRoute", "previous",loc.pathname," == ", `/${lang}/${Route}` == loc.pathname );

    console.log("==?", newRoute == loc.pathname);
    const backgroundDiv = document.getElementById("background-image-div");
    
    if(newRoute == loc.pathname){
      backgroundDiv?.classList.remove("blur");
      navigate(`/${lang}`)
      return;
    }

    backgroundDiv?.classList.add("blur");
    navigate(`/${lang}/${Route}`)
  }

  function showNavbar(show:boolean) {

    const sections = ["news","games","about","gallery"]
    const lastSegment = loc.pathname.split("/").pop();
    const interNavbar = document.getElementById("interactable-navbar");        
        
    if(!sections.includes(lastSegment?lastSegment:"") && !show){ //if we are in home and want to hide
      interNavbar?.classList.remove("show-navbar");
      return;
    }    

    if(show){
      interNavbar?.classList.add("show-navbar");
    }
  }


  return (
    <>
      <div className="navbar"
        onMouseEnter={ () => { showNavbar(true);} }
        onMouseLeave={ () => { showNavbar(false); } }>
        <div id='interactable-navbar'>
          <div>
            <div className="nav-img">
              <img onClick={ () => navigate(`/${lang}`)} src="/img/logos/LogoJustText.png" alt="no-logo" />
            </div>

            <li><span onClick={ () => GoToRoute("news")}    >{navTitles[lang].news}</span></li>
            <li><span onClick={ () => GoToRoute("games")}   >{navTitles[lang].games}</span></li>
            <li><span onClick={ () => GoToRoute("about")}   >{navTitles[lang].about}</span></li>
            <li><span onClick={ () => GoToRoute("gallery")} >{navTitles[lang].gallery}</span></li>        
            <li><a href="#" target='_blank'><span>{navTitles[lang].store}</span></a></li>
          </div>

        </div>
        <div className='interactable-navbar-mobile'>
          <button id='nav-mobile-btn' className={`${mobileShow?'cross':''}`} 
            onClick={ () => { setMobileShow(!mobileShow) } } >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
          <div className={`navButtons ${mobileShow?'show':''}`}>
            <li><span onClick={ () => GoToRoute("news")}>{navTitles[lang].news}</span></li>
            <li><span onClick={ () => GoToRoute("games")}>{navTitles[lang].games}</span></li>
            <li><span onClick={ () => GoToRoute("about")}>{navTitles[lang].about}</span></li>
            <li><span onClick={ () => GoToRoute("gallery")}>{navTitles[lang].gallery}</span></li>
            <li><a href="#" target='_blank'><span>{navTitles[lang].store}</span></a></li>            
          </div>      
        </div>
      </div>
    </>    
  )
}

export default Navbar

