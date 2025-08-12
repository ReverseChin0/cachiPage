import type { NewsPropsLocalized } from "../data/types"
import { useCurrentLanguage } from "../hooks/UseCurrentLanguage"
import { useRef } from "react"
import { hideNavbar } from "../utility/utility"
import { useClickOutsideNavbar } from "../utility/useClickOutsideNavbar"

type newsProps = {
    news: NewsPropsLocalized[]
}

const News = ( {news} : newsProps ) => {

    const language = useCurrentLanguage();    
    //const navigate = useNavigate();
    const frameBgRef = useRef<HTMLDivElement>(null);

    /*useEffect(() => {                
        function handleDocumentClick(e: MouseEvent) {
            const navbar = document.querySelector('.navbar');
            if (navbar && navbar.contains(e.target as Node)) {            
                return;
            }

            if ( frameBgRef.current && !frameBgRef.current.contains(e.target as Node)) 
            {
                document.getElementById("background-image-div")?.classList.remove("blur");
                hideNavbar();
                navigate(`/${language}`);
            }
        }
        
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, [navigate, language]);*/
    useClickOutsideNavbar({
        frameBgRef,
        hideNavbar,
    });


    return (
      <div className='frame-bg' ref={frameBgRef}>
        <div className="news">
            <h1 className="news-main-title">{
                    language == "ES"? "Noticias" : 
                    language == "FR" ? "Actualités":
                    language == "JP" ? "ニュース": "News"}
            </h1>
            <div className="news-scroll">                                
                { 
                    news.map((article,index)=>{
                        const { date, translation } = article;
                        const {title, message} = translation[language];
                        return <div className="new-item" key={`article_${index}`}>
                            <h3>{title}</h3> <h5>{date}</h5>
                            <p>{message}</p>
                        </div>
                    }) 
                }
            </div>
        </div>
      </div>
    )
}

export default News