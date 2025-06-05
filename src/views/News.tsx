import type { NewsItem } from "../data/types"

type newsProps = {
    news: NewsItem[]
}

const News = ( {news} : newsProps ) => {

    return (
      <div className='frame-bg'>
        <div className="news">
            <div className="news-scroll">
                <h1>News</h1>
                { 
                    news.map((article,index)=>{
                        const { title,message,date } = article;
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