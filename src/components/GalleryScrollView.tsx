import React from 'react'
import type { GalleryItem } from '../data/types';

type galleryScrollviewProps = {
  data: GalleryItem[];
  onClickedGallImg: (arg: number) => void;
  show?:boolean
}

const GalleryScrollView = (props: galleryScrollviewProps) => {

  const { data, onClickedGallImg, show } = props;

  return (
    <div className={show? "gal-sv" : "gal-sv hide" }>
        <div className="gal-scroll">            
            <div className='gallery-grid'>
            {
                data.map( (imageData:GalleryItem,index) => {
                return <div 
                onClick={ 
                    () => { onClickedGallImg(index); }
                }
                key={`Gallery_${index}`}> 
                    <img src={imageData.thumbnail} alt="no_thumbnail_available" />
                </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default GalleryScrollView