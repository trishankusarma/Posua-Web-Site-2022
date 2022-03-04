import React from 'react'
import pic1 from "../../../../assets/GalleryImages/p1.png"
import pic2 from "../../../../assets/GalleryImages/p2.png"
import pic3 from "../../../../assets/GalleryImages/p3.png"
import pic4 from "../../../../assets/GalleryImages/p4.png"
import pic5 from "../../../../assets/GalleryImages/p5.png"

function Gallery2016() {
  return (
    <div>
      <div class="gallery">
    <div class="imgage">
      <img src={pic2} alt="" />
    </div>
    <div class="imgage">
      <img src={pic1} alt="" />
    </div>

    <div class="imgage">
      <img src={pic4} alt="" />
    </div>

    <div class="imgage">
      <img src={pic3} alt="" />
    </div>

    <div class="imgage">
      <img src={pic5} alt="" />
    </div>
  </div>
  </div>
  )
}

export default Gallery2016