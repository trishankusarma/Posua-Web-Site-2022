import React from 'react'
import pic1 from "../../../../assets/GalleryImages/2017/p1.jpg"
import pic2 from "../../../../assets/GalleryImages/2017/p2.jpg"
import pic3 from "../../../../assets/GalleryImages/2017/p3.jpg"
import pic4 from "../../../../assets/GalleryImages/2017/p4.jpg"
import pic5 from "../../../../assets/GalleryImages/2017/p5.jpg"
import pic6 from "../../../../assets/GalleryImages/2017/p6.jpg"
import pic7 from "../../../../assets/GalleryImages/2017/p7.jpg"
import pic8 from "../../../../assets/GalleryImages/2017/p8.jpg"
import pic9 from "../../../../assets/GalleryImages/2017/p9.jpg"

function Gallery2017() {
  return (
    <div>
      <div className="gallery">
        <div className="imgage">
          <img src={pic1} alt="" />
        </div>
        <div className="imgage">
          <img src={pic2} alt="" />
        </div>
        <div className="imgage ">
          <img src={pic3} alt="" />
        </div>
        <div className="imgage REMOVE">
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
        <div className="imgage HIDE">
          <img src={pic9} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery2017