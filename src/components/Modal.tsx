import { useState } from "react"
import type { GalleryItem } from "../data/types"

type modalGalleryProps = {
    data: GalleryItem[],
    initial: number   
}

const Modal = ({data,initial}: modalGalleryProps) => {

   const [index, setIndex] =  useState(initial)

  return (
    <div>
        <img src={data[index].previewImage} alt="should be preview image" />
        <div className="flex-modal">
            <div>
                <h2>{data[index].title}</h2>
                <h2>{data[index].subtitle}</h2>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Modal