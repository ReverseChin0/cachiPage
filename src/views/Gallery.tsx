import type { GalleryItem } from '../data/types';
import '../styles/Frames.css';

type galleryProps = {
  data: GalleryItem[];
}

const Gallery = (props: galleryProps) => {

  const { data } = props;

  return (
    <div className='frame-bg gallery'>                   
      <div className="news">
        <div className="news-scroll">
          <h1>Gallery</h1>
          <div className='gallery-grid'>
            {
              data.map( (imageData,index) => {
                return <div></div>                                
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery