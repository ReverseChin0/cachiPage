import { useState } from 'react';
import GalleryCarrousel from '../components/GalleryCarrousel';
import GalleryScrollView from '../components/GalleryScrollView';
import type { GalleryItem } from '../data/types';
import '../styles/Frames.css';

type galleryProps = {
  data: GalleryItem[];
}

const Gallery = (props: galleryProps) => {

  const { data } = props;
  const [ show, setShow ] = useState(true);
  const [ indexInitial, setInitial ] = useState<number|null>(null);

  const clickedGalleryImg = (index:number) => {
    console.log("clicked Img 😱",index);
    setShow(!show);
    setInitial(index);
  }

  return (
    <div className='frame-bg gallery'> 
      <h3>Gallery</h3>
      <GalleryScrollView data={data} onClickedGallImg={clickedGalleryImg} show={show} />
      <GalleryCarrousel initial={indexInitial} data={data} show={!show}/>
    </div>
  )
}

export default Gallery