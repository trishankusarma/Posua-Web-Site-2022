import React from 'react'
import pic from '../../../assets/GalleryImages/japi_img.png'


function GallerySubHeader() {
  return (
    <>
      <p className="GallerySubHeader">
      Photographs are memories frozen in time. To cherish the memories made during all the editions of Posua, we have collected and immortalised them as photographs. The images here are intended to take the viewers in a trip down Posua's memory lane, and allow everyone to enjoy and bask in the warmth of mesmerizing gaiety, an exhilaration of fun activities that constitute Posua.
      </p>
      <hr className='GalleryHeaderBorder'/>
      <div className="GalleryHeaderBorderIconSection">
        <img src={pic} className="SmallJapi" alt='japi-img'></img> 
        <img src={pic} className="MidJapi" alt='japi-img'></img> 
        <img src={pic} className="SmallJapi" alt='japi-img'></img> 
        </div>   
    </>
  )
}

export default GallerySubHeader