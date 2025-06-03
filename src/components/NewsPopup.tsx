import { useEffect, useRef } from 'react'
import '../styles/NewsPopup.css'

type newsProps = {
  news:{
    title:string,
    message:string,
    date:string
  }[],
  isVisible:boolean
}

const NewsPopup = (newsProps: newsProps ) => {

  const { title, date } = newsProps.news[0];
  const {isVisible} = newsProps;

  return (
    <div id='news-popup' className={isVisible ? `news-popup showNews`:`news-popup`}>
        <h3>News</h3>              
        <h5>{date} - {title}</h5>      
    </div>
  )
}

export default NewsPopup