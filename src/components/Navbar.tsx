import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getCurrentLanguage } from '../utility/utility'
import '../styles/Navbar.css'

const Navbar = () => {

  const lang = getCurrentLanguage(); //EN ES FR JP
  const loc = useLocation();
  
  const newUrl = useRef("")
  let navigate = useNavigate();

  const backgroundDiv = document.getElementById("background-image-div");

  useEffect(() => {
    const onlyPath = loc.pathname.split("/").pop();
    if(loc.pathname !== "/" && onlyPath != null ){
      //URLTest(onlyPath);
      GoToRoute(onlyPath);
      document.getElementById("interactable-navbar")?.classList.add("show-navbar");
    }
  }, [])    

  function GoToRoute(Route:string){
    const newRoute = `/${lang}/${Route}`;
    //console.log("GoToRoute", "previous",loc.pathname," == ", `/${lang}/${Route}` == loc.pathname );

    console.log("==?", newRoute == loc.pathname);
    
    if(newRoute == loc.pathname){
      backgroundDiv?.classList.remove("blur");
      navigate(`/${lang}`)
      return;
    }

    backgroundDiv?.classList.add("blur");
    navigate(`/${lang}/${Route}`)
  }

  function showNavbar(show:boolean) {

    // console.log(newUrl.current,"🦕");
    if(newUrl.current !== '/' && newUrl.current !== ''){
      return;
    }    

    let interNavbar = document.getElementById("interactable-navbar");
    if(show){
      interNavbar?.classList.add("show-navbar");
    }else{
      interNavbar?.classList.remove("show-navbar");
    }    
  }

  return (
    <div className="navbar"
        onMouseEnter={ () => { showNavbar(true);} }
        onMouseLeave={ () => { showNavbar(false); } }
    >
      <div id='interactable-navbar'>
        <div>
          <div className="nav-img">
            <img onClick={ () => GoToRoute("/")} src="/img/logos/LogoJustText.png" alt="no-logo" />
          </div>

          <li><span onClick={ () => GoToRoute("news")}    >NEWS</span></li>
          <li><span onClick={ () => GoToRoute("games")}   >GAMES</span></li>
          <li><span onClick={ () => GoToRoute("about")}   >ABOUT US</span></li>
          <li><span onClick={ () => GoToRoute("gallery")} >GALLERY</span></li>        
          <li><a href="#" target='_blank'><span>STORE</span></a></li>
        </div>

      </div>      
    </div>
  )
}

export default Navbar