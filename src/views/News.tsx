import type { NewsPropsLocalized } from "../data/types"
import { useCurrentLanguage } from "../hooks/UseCurrentLanguage"

type newsProps = {
    news: NewsPropsLocalized[]
}

const News = ( {news} : newsProps ) => {

    const language = useCurrentLanguage();

    return (
      <div className='frame-bg'>
        <div className="news">
            <div className="news-scroll">
                <h1>{
                    language == "ES"? "Noticias" : 
                    language == "FR" ? "Actualités":
                    language == "JP" ? "ニュース": "News"}
                </h1>
                
                { 
                    news.map((article,index)=>{
                        const { date, translation } = article; //LIKE THIS BUT I DONT KNOW HOW
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