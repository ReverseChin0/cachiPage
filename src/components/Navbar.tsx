import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

type NavProps = {
  setPath:(newPath:string) => void,
  previous?:string
}

const Navbar = (props:NavProps) => {
  
  const { previous, setPath } = props;
  let navigate = useNavigate();

  function URLTest(url:string){

    // console.log("current:",url," previous:", previous);
    setPath(url);

    if(url === '/'){
      navigate('/');
      window.location.reload();
      return;
    }

    const backgroundDiv = document.getElementById("background-image-div");

    if(url === previous){
      navigate('/');
      setPath('');
       backgroundDiv?.classList.remove("blur");
    }else{
      backgroundDiv?.classList.add("blur");
      navigate(`EN/${url}`);
    }        
  }

  function showNavbar(show:boolean) {    
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

        <div className="nav-img">
          <img onClick={ () => URLTest("/")} src="/img/logos/LogoJustText.png" alt="no-logo" />
        </div>

        <li><span onClick={ () => URLTest("news")}    >NEWS</span></li>
        <li><span onClick={ () => URLTest("games")}   >GAMES</span></li>
        <li><span onClick={ () => URLTest("about")}   >ABOUT</span> <span>US</span></li>
        <li><span onClick={ () => URLTest("gallery")} >GALLERY</span></li>        
        <li><a href="#" target='blank'><span>STORE</span></a></li>

      </div>      
    </div>
  )
}

export default Navbar