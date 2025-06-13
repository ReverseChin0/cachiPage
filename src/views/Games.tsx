import '../styles/Slides.css'
import { useEffect, useState } from "react";
import type { GameProps } from "../data/types";

type gameViewProps = {
  gamesdata:GameProps[]
}

const Games = (props: gameViewProps) => {

  const {gamesdata} = props;

  const [games] = useState(gamesdata);
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
          <div className="section-center">
            {
              games.map((game: GameProps, gameIndex: number) => {
                const { id, title, images } = game;

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
                  </article>
                );
              })
            }

            <button className="prev" onClick={() => setIndex(index - 1)}/>                          

            <button className="next" onClick={() => setIndex(index + 1)}/>                          

            <div className="dots">
              {games.map((_:GameProps, dotIndex:number) => (
                <span
                  key={dotIndex}
                  className={`dot ${index === dotIndex ? 'active-dot' : ''}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Games