import { useClickOutsideNavbar } from '../utility/useClickOutsideNavbar';
import { useCurrentLanguage } from '../hooks/UseCurrentLanguage';
import { hideNavbar } from "../utility/utility";
import { useEffect, useMemo, useRef, useState } from 'react';
import { aboutdata } from '../data/infoAbout';
import '../styles/Frames.css'

const About = () => {  
  
  const language = useCurrentLanguage();
  const frameBgRef = useRef<HTMLDivElement>(null);

  // Get the messages based on current language
  const messages = useMemo(() => aboutdata[language], [language]);

  const [index, setIndex] = useState(0);  
  
  useClickOutsideNavbar({
      frameBgRef,
      hideNavbar,
  });

  useEffect(() => {
    const lastIndex = messages.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }          
    

  }, [index, messages]);  

  return (  
    <div className='frame-bg' ref={frameBgRef}>     
      <div className='frame-about frame-slide-gradient'>
          <div className="section-about bellefair">            
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