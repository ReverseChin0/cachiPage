import GalleryCarrousel from '../components/GalleryCarrousel';
import GalleryScrollView from '../components/GalleryScrollView';
import GalleryLightBox from '../components/GalleryLightBox';
import { getCurrentLanguage, GetGalleryFromLanguage } from '../utility/utility';
import { galleryDataText } from '../data/galleryData';
import { useState } from 'react';
import '../styles/Frames.css';

const Gallery = () => {

  const language = getCurrentLanguage();
  const data = GetGalleryFromLanguage(galleryDataText, language);
  const [ show, setShow ] = useState(true);
  const [ lgboxActive, setLgboxActive ] = useState(false);
  const [ indexInitial, setInitial ] = useState<number|null>(null);

  const clickedGalleryImg = (index:number) => {
    console.log("clicked Img 😱",index);
    setShow(!show);
    setInitial(index);
  }

  const setSelectedLgBoxImage = (index:number) => {    
    setInitial(index);
    setLgboxActive(true);
  }

  const closeLightBox = () => {
    console.log("DAMN CLOSE THAT SHIT");
    
    setLgboxActive(false)
  }

  const closeCarrousel = () => {
    setShow(true);
  }

  return (
    <>
    
      {
        !show && <div onClick={closeCarrousel} className="close-carrousel-div"/>
      }

      <div className='frame-bg gallery'> 
        <h3>Gallery</h3>
        <GalleryScrollView data={data} onClickedGallImg={clickedGalleryImg} show={show} />
        <GalleryCarrousel initial={indexInitial} data={data} show={!show} selectImage={setSelectedLgBoxImage}/>
      </div>

      {
        lgboxActive && <GalleryLightBox items={data} initialIndex={indexInitial?indexInitial:0} onClose={closeLightBox}/>
      }
      
    </>
  )
}

export default Gallery