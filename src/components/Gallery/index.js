import React from 'react'
import GalleryContent from './GalleryContent/GalleryContent'
import GalleryHeader from './GalleryHeader/GalleryHeader'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='cover1'>
        <GalleryHeader/>
        <GalleryContent/>
    </div>
  )
}

export default Gallery