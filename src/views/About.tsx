import { useEffect, useState } from 'react';
import { aboutdata } from '../data/infoAbout'
import '../styles/Frames.css'

const About = () => {  

  const [messages] = useState(aboutdata.messages);
  const [index, setIndex] = useState(0);  
  

  useEffect(() => {
    const lastIndex = messages.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }          

    console.log(messages);
    

  }, [index, messages]);  

  return (  
    <div className='frame-bg'>     
      <div>
          <div className="section-about">            
            {
              messages.map((message: string, msgIndex: number) => {                    

                let position = 'nextSlide';

                if (msgIndex === index) {
                  position = 'activeSlide';
                }

                if (
                  msgIndex === index - 1 ||
                  (index === 0 && msgIndex === messages.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (
                  <article className={position} key={msgIndex}>
                    {/* <div className='flex-horizontal'>
                      {
                        images.map((image,index) => <img className='game-img' key={`${id}_image_${index}`} src={image}/>)
                      }
                    </div>
                    <h4>{title}</h4>*/}
                    <div dangerouslySetInnerHTML={{__html:message}}></div>
                  </article>
                );
              })
            }

            <button className="prev" onClick={() => setIndex(index - 1)}/>                          

            <button className="next" onClick={() => setIndex(index + 1)}/>                          

            <div className="dots">
              {messages.map((_:string, dotIndex:number) => (
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

export default About