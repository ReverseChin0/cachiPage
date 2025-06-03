import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

  let navigate = useNavigate();

  function URLTest(url:string){                

    if(url === "/"){
      navigate(`/`);
      window.location.reload();
    }else{
      const backgroundDiv = document.getElementById("background-image-div");
      backgroundDiv?.classList.add("blur");
      navigate(`EN/${url}`);
    }
  }

  function showNavbar(show:boolean) {
    // console.log("show-navbar");    
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
        onMouseLeave={ () => { showNavbar(false); } }>          
      <div id='interactable-navbar'>
        <div className="nav-img">
          <img onClick={ () => URLTest("/")} src="/img/logos/LogoJustText.png" alt="no-logo" />
        </div>
        <li><span onClick={ () => URLTest("news")}    >NEWS</span></li>
        <li><span onClick={ () => URLTest("games")}   >GAMES</span></li>
        <li><span onClick={ () => URLTest("about")}   >ABOUT</span> <span>US</span></li>
        <li><span onClick={ () => URLTest("gallery")} >GALLERY</span></li>
        <li><span onClick={ () => URLTest("store")}   >STORE</span></li>
      </div>      
    </div>
  )
}

export default Navbar