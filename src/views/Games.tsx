import '../styles/Slides.css'
import { useEffect, useState } from "react";
import type { gameProps } from "../data/types";

type gameViewProps = {
  gamesdata:gameProps[]
}

const Games = (props: gameViewProps) => {

  const {gamesdata} = props;

  const [games, setGames] = useState(gamesdata);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = games.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
      
  }, [index, games]);  

  return (
    <div className='frame-bg'>
      <div>
        <section className="section">
          <div className="section-center" onClick={(e) => {console.log("click",e.currentTarget);
          }}>
            {
              games.map((game: gameProps, gameIndex: number) => {
                const { id, layout, title, images, quote } = game;

                let position = 'nextSlide';

                if (gameIndex === index) {
                  position = 'activeSlide';
                }

                if (
                  gameIndex === index - 1 ||
                  (index === 0 && gameIndex === games.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (
                  <article className={position} key={id}>
                    <div className='flex-horizontal'>
                      {
                        images.map((image,index) => <img className='game-img' key={`${id}_image_${index}`} src={image}/>)
                      }
                    </div>                    
                    <h4>{title}</h4>                  
                    <p className="text">{quote}</p>
                  </article>
                );
              })
            }

            <button className="prev" onClick={() => setIndex(index - 1)}/>                          

            <button className="next" onClick={() => setIndex(index + 1)}/>                          

            <div className="dots">
              {games.map((_:gameProps, dotIndex:number) => (
                <span
                  key={dotIndex}
                  className={`dot ${index === dotIndex ? 'active-dot' : ''}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Games