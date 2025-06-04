import { aboutdata } from '../data/infoAbout'
import '../styles/Frames.css'

const About = () => {

  const { title, message } = aboutdata;

  return (
    <div className='frame-bg'>
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{__html:message}}>
        </div>        
      </div>
    </div>
  )

}

export default About