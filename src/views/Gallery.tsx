import type { GalleryItem } from '../data/types';
import '../styles/Frames.css';

type galleryProps = {
  data: GalleryItem[];
}

const Gallery = (props: galleryProps) => {

  const { data } = props;

  const clickedGalleryImg = (index:number) => {
    console.log("clicked Img 😱",index);    

  }

  return (
    <div className='frame-bg gallery'>                   
      <div className="news">
        <div className="news-scroll">
          <h1>Gallery</h1>
          <div className='gallery-grid'>
            {
              data.map( (imageData:GalleryItem,index) => {
                return <div 
                onClick={ 
                  () => { clickedGalleryImg(index); }
                }
                key={`Gallery_${index}`}> 
                  <img src={imageData.thumbnail} alt="no_thumbnail_available" />
                </div>
              })
            }
          </div>
        </div>
        {/* <div className='carrousel-view'>

        </div> */}
      </div>
    </div>
  )
}

export default Gallery