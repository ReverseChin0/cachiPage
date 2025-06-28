import { useState } from "react"
import type { GalleryItem } from "../data/types"
import { AnimatePresence, motion } from "framer-motion"
import "../styles/GalleryLightbox.css"

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

  return (
    <>        
    <div id="gallery-lightbox">      
      <div onClick={onClose} className="close-lightbox-div"/>
      <div onClick={e => e.stopPropagation()} className="lightbox-content">
        <AnimatePresence mode="wait">
        <motion.img
          key={sourceImg}
          src={sourceImg}
          alt={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lgbox-Image"/*"max-w-[90vw] max-h-[90vh] object-contain"*/
        />
      </AnimatePresence>

      {/* Should be the default img arrows */}
      <button className="lightbox-left" onClick={handlePrev}/>
      <button className="lightbox-right" onClick={handleNext}/>
      {/* Top-right buttons */}
      <div className="lightbox-buttons"/*"absolute top-4 right-4 flex gap-3"*/>
        <a href={current.downloadImage} download className="text-white underline">Download</a>
        <button onClick={() => setShowInfo((prev) => !prev)} className="text-white underline">Info</button>        
        {/* <button onClick={onClose} className='cross'>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button> */}
      </div>

      {/* Info Overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className=""
          >
            <nav id='mobile'>
              <button className='cross'>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </button>          
            </nav>       
            <h2 className="">{current.title}</h2>
            <h3 className="">{current.subtitle}</h3>
            <p className="">{current.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

    </div>    
    </>
  )
}

export default GalleryLightBox