import { useState } from "react"
import type { GalleryItem } from "../data/types"
import { AnimatePresence, motion } from "framer-motion"
import "../styles/GalleryLightbox.css"
import React from "react"

type LightBoxProps = {
    items: GalleryItem[]
    initialIndex: number
    onClose: () => void
}

const GalleryLightBox = ({items, initialIndex, onClose}: LightBoxProps) => {
  const [index, setIndex] = useState(initialIndex)
  const [showInfo, setShowInfo] = useState(false)

  const current = items[index]

  //must be unique and same as the source since its what triggers the animation
  const sourceImg = current.previewImage ? current.previewImage : current.thumbnail; 

  const handlePrev = () => { setIndex( (i) => (i - 1 + items.length) % items.length )}
  const handleNext = () => { setIndex( (i) => (i + 1) % items.length ) }

  const handleLightboxClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const shouldClose = target.classList.contains("image-container");    

    if (shouldClose) onClose();
  };

  return (
    <>        
    <div id="gallery-lightbox">      
      <div className="lightbox-content" onClick={handleLightboxClose}>        
        <div className="image-container">
          <AnimatePresence mode="wait">
            <motion.img
              key={sourceImg}
              src={sourceImg}
              alt={current.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lightbox-Image"
            />
          </AnimatePresence>
        </div>        

        {/* Should be the default img arrows */}
        <button className="lightbox-left" onClick={handlePrev}/>
        <button className="lightbox-right" onClick={handleNext}/>
        {/* Top-right buttons */}
        <div className="lightbox-photo-footer">
          <div></div>
          <div className="lightbox-titles">
            <h3>{current.title}</h3>
            <h4>{current.subtitle}</h4>
          </div>
          <div className="lightbox-buttons"/*"absolute top-4 right-4 flex gap-3"*/>
            <div>
              <a href={current.downloadImage} download>
                <img src="/icons/download_45dp.png" alt="" />
              </a>
            </div>
            <div onClick={() => setShowInfo(true)}>              
                <img src="/icons/info_45dp.png" alt="" />              
            </div>            
          </div>
        </div>      

        {/* Info Overlay */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="lightbox-info-overlay"
            >
              
              <button className='cross' onClick={() => setShowInfo(false)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </button>

              <h2 className="lightbox-info-title">{current.title}</h2>
              <h3 className="lightbox-info-subtitle">{current.subtitle}</h3>
              <p> { current.description.split('\n').map((line, index) => (
                <React.Fragment key={index}> 
                  { line.trim() } 
                  <br/> 
                </React.Fragment>
              ))}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>    
    </>
  )
}

export default GalleryLightBox