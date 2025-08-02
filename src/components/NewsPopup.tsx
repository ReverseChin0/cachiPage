import { getCurrentLanguage, IsOnMain } from '../utility/utility';
import type { NewsPopupProps } from '../data/types';
import '../styles/NewsPopup.css'

const NewsPopup = ( { news, delayPassed }: NewsPopupProps ) => {  

  const language = getCurrentLanguage();

  const isOnMainPage = IsOnMain();

  const { date } = news;    

  return (
    <div id='news-popup' className={delayPassed && isOnMainPage ? `news-popup showNews`:`news-popup`}>
        <h3>{
            language == "ES"? "Noticias" : 
            language == "FR" ? "Actualités":
            language == "JP" ? "ニュース": "News"}
        </h3>              
        <h5>{date} - {news.translation[language].title}</h5>      
    </div>
  )
}

export default NewsPopup