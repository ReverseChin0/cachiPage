import { useEffect, useState } from 'react'
import type { GalleryItem } from '../data/types';

type GallCarrouselProps = {
    initial:number,
    data: GalleryItem[],
    show?: boolean
}

const GalleryCarrousel = (props: GallCarrouselProps) => {

    const { show, initial } = props;
    const [ galleryImages ] = useState(props.data);
    const [ index, setIndex ] = useState(initial);

    // useEffect(() => {

    //     setIndex(initial);

    // }, [initial])

    useEffect(() => {

        const lastIndex = galleryImages.length - 1;

        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }                       

    }, [index, galleryImages]);

  return (
    <div className={show?'gallery-carrousel':'gallery-carrousel hide'}>
          <div className="section-about">            
            {
              galleryImages.map((galleryItem: GalleryItem, imgIndex: number) => {                    

                const { title, subtitle, downloadImage, thumbnail, previewImage, description} = galleryItem;
                // console.log(imgIndex, previewImage, previewImage == null || previewImage == '');
                
                let imgElement;
                if( previewImage == null || previewImage == '' ) {
                    imgElement = <img className='gal-img-carrousel' src={thumbnail} alt={"no thumbnail Image :("}/>
                }else{
                    imgElement = <img className='gal-img-carrousel' src={previewImage} alt={"preview Image should be here :("}/>
                }
                    

                let position = 'nextSlide';

                if (imgIndex === index) {
                  position = 'activeSlide';
                }

                if (
                  imgIndex === index - 1 ||
                  (index === 0 && imgIndex === galleryImages.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (
                  <article className={position} key={imgIndex}>
                    {imgElement}
                  </article>
                );
              })
            }                                      
            {/* <div className="dots">
              {messages.map((_:string, dotIndex:number) => (
                <span
                  key={dotIndex}
                  className={`dot ${index === dotIndex ? 'active-dot' : ''}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div> */}
          </div>
          <button className="prev gal" onClick={() => setIndex(index - 1)}/>                          
          <button className="next gal" onClick={() => setIndex(index + 1)}/>
      </div>
  )
}

export default GalleryCarrousel