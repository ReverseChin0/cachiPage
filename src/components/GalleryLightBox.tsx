import { useState } from "react"
import type { GalleryItem } from "../data/types"

type LightBoxProps = {
    items: GalleryItem[]
    initialIndex: number
    onClose: () => void
}

const GalleryLightBox = ({items, initialIndex, onClose}: LightBoxProps) => {
  const [index, setIndex] = useState(initialIndex)
  const [showInfo, setShowInfo] = useState(false)

  const current = items[index]

  const handlePrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const handleNext = () => setIndex((i) => (i + 1) % items.length)

  return (
    // <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
    //   <AnimatePresence mode="wait">
    //     <motion.img
    //       key={current.previewImage}
    //       src={current.previewImage}
    //       alt={current.title}
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 0.3 }}
    //       className="max-w-[90vw] max-h-[90vh] object-contain"
    //     />
    //   </AnimatePresence>

    //   {/* Arrows */}
    //   <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={handlePrev}>
    //     ‹
    //   </button>
    //   <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={handleNext}>
    //     ›
    //   </button>

    //   {/* Top-right buttons */}
    //   <div className="absolute top-4 right-4 flex gap-3">
    //     <a href={current.downloadImage} download className="text-white underline">Download</a>
    //     <button onClick={() => setShowInfo((prev) => !prev)} className="text-white underline">Info</button>
    //     <button onClick={onClose} className="text-white underline">Close</button>
    //   </div>

    //   {/* Info Overlay */}
    //   <AnimatePresence>
    //     {showInfo && (
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: 20 }}
    //         transition={{ duration: 0.3 }}
    //         className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 max-h-[40vh] overflow-y-auto"
    //       >
    //         <h2 className="text-lg font-bold">{current.title}</h2>
    //         <h3 className="text-sm mb-2">{current.subtitle}</h3>
    //         <p className="text-sm whitespace-pre-wrap">{current.description}</p>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <div></div>
  )
}

export default GalleryLightBox