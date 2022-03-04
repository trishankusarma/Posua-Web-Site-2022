import React from 'react'
import pic from '../../../assets/GalleryImages/japi_img.png'


function GallerySubHeader() {
  return (
    <>
      <p className="GallerySubHeader">
        A person filled with enthusiasm: such as. a : one who is ardently
        attached to a cause, object, or pursuit a sports car enthusiast. b : one
        who tends to become ardently absorbed in an interest.
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