import React from 'react'
import pic1 from "../../../../assets/GalleryImages/2014/p1.jpg"
import pic2 from "../../../../assets/GalleryImages/2014/p2.jpg"
import pic3 from "../../../../assets/GalleryImages/2014/p3.jpg"
import pic4 from "../../../../assets/GalleryImages/2014/p4.jpg"
import pic5 from "../../../../assets/GalleryImages/2014/p5.jpg"
import pic6 from "../../../../assets/GalleryImages/2014/p6.jpg"
import pic7 from "../../../../assets/GalleryImages/2014/p7.jpg"
import pic8 from "../../../../assets/GalleryImages/2014/p8.jpg"

function Gallery2014() {
  return (
    <div>
      <div className="gallery">
        <div className="imgage">
          <img src={pic1} alt="" />
        </div>
        <div className="imgage">
          <img src={pic2} alt="" />
        </div>
        <div className="imgage">
          <img src={pic3} alt="" />
        </div>
        <div className="imgage">
          <img src={pic4} alt="" />
        </div>
        <div className="imgage">
          <img src={pic5} alt="" />
        </div>
        <div className="imgage">
          <img src={pic6} alt="" />
        </div>
        <div className="imgage">
          <img src={pic7} alt="" />
        </div>
        <div className="imgage">
          <img src={pic8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery2014