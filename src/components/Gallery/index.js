import React from 'react'
import GalleryContent from './GalleryContent/GalleryContent'
import GalleryHeader from './GalleryHeader/GalleryHeader'
import './style.css'

const Gallery = () => {
  return (
    <div className='cover'>
        <GalleryHeader/>
        <GalleryContent/>
    </div>
  )
}

export default Gallery