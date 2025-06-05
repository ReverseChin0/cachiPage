import type { NewsPopupProps } from '../data/types';
import '../styles/NewsPopup.css'


const NewsPopup = ( { news, delayPassed, isOnMainPage }: NewsPopupProps ) => {

  const { title, date } = news[0];    

  return (
    <div id='news-popup' className={delayPassed && isOnMainPage ? `news-popup showNews`:`news-popup`}>
        <h3>News</h3>              
        <h5>{date} - {title}</h5>      
    </div>
  )
}

export default NewsPopup