import { useEffect, useState } from "react";
import { useCurrentLanguage } from '../hooks/UseCurrentLanguage';
import { gamesData } from '../data/infoGame';
import '../styles/Slides.css'
import type { GamePropsLocalized } from "../data/types";


const Games = () => {

  const language = useCurrentLanguage(); 

  const [games] = useState(gamesData);
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
      <div className="games-content frame-slide-gradient">
          <div className="section-center">
            {
              games.map((game: GamePropsLocalized, gameIndex: number) => {
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
                    <h4>{title[language]}</h4>                    
                  </article>
                );
              })
            }                                  

            <div className="dots">
              {games.map((_:GamePropsLocalized, dotIndex:number) => (
                <span
                  key={dotIndex}
                  className={`dot ${index === dotIndex ? 'active-dot' : ''}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
          </div>
          <button className="games prev" onClick={() => setIndex(index - 1)}/>
          <button className="games next" onClick={() => setIndex(index + 1)}/>    
      </div>
    </div>
  )
}

export default Games