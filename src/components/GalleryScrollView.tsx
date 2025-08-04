//import React from 'react'
import type { GalleryItem } from '../data/types';

type galleryScrollviewProps = {
  data: GalleryItem[];
  onClickedGallImg: (arg: number) => void;
  show?:boolean;
  language?: string;
}

const GalleryScrollView = (props: galleryScrollviewProps) => {

  const { data, onClickedGallImg, show, language } = props;

  return (
    <div className={`gal-sv ${show?'':'hide'}`}>
       <h3 className="gallery-carrousel-title">{
             language == "ES"? "Galeria" : 
             language == "FR" ? "Galerie":
             language == "JP" ? "ギャラリー": "Gallery"}
        </h3>
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