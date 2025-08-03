import { useEffect, useMemo, useState } from 'react';
import { aboutdata } from '../data/infoAbout'
import '../styles/Frames.css'
import { useCurrentLanguage } from '../hooks/UseCurrentLanguage';

const About = () => {  
  
  const language = useCurrentLanguage();

  // Get the messages based on current language
  const messages = useMemo(() => aboutdata[language], [language]);

  const [index, setIndex] = useState(0);  
  

  useEffect(() => {
    const lastIndex = messages.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }          

    //console.log(messages);    

  }, [index, messages]);  

  return (  
    <div className='frame-bg'>     
      <div className='frame-slide-gradient'>
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
                    <div dangerouslySetInnerHTML={{__html:message}}></div>
                  </article>
                );
              })
            }                                      

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
          <button className="prev about" onClick={() => setIndex(index - 1)}/>                          
          <button className="next about" onClick={() => setIndex(index + 1)}/>
      </div>
    </div>
    
  )

}

export default About