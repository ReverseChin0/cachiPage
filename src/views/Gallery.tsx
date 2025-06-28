import { useState } from 'react';
import GalleryCarrousel from '../components/GalleryCarrousel';
import GalleryScrollView from '../components/GalleryScrollView';
import type { GalleryItem } from '../data/types';
import '../styles/Frames.css';
import GalleryLightBox from '../components/GalleryLightBox';

type galleryProps = {
  data: GalleryItem[];
}

const Gallery = (props: galleryProps) => {

  const { data } = props;
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
    setLgboxActive(false)
  }

  return (
    <>
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