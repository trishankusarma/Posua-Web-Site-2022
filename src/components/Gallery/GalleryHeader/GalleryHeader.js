import React from 'react'
import pic from '../../../assets/GalleryImages/japi_img.png'
import GallerySubHeader from './GallerySubHeader'

function GalleryHeader() {
  return (
    <div className='HeaderSection'>
        <div className="headerSubSection">
            <img src={pic} alt='japi-img'></img> 
            <h1 className='GalleryHeading'>GALLERY</h1>
            <img src={pic} alt='japi-img'></img> 
        </div>
        <GallerySubHeader/>
    </div>
  )
}

export default GalleryHeader