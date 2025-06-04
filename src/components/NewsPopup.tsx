import type { NewsPopupProps } from '../data/types';
import '../styles/NewsPopup.css'


const NewsPopup = ( { news, isVisible }: NewsPopupProps ) => {

  const { title, date } = news[0];

  return (
    <div id='news-popup' className={isVisible ? `news-popup showNews`:`news-popup`}>
        <h3>News</h3>              
        <h5>{date} - {title}</h5>      
    </div>
  )
}

export default NewsPopup