import React from 'react'
import japi from '../../../assets/japi.png'
import GallerySubHeader from './GallerySubHeader'

function GalleryHeader() {
  return (
    <div className='HeaderSection'>
      <div className="headerSubSection heading">
        <h1 className="text-center heading-name">
          <img className="japi-animation team-japi" src={japi} alt="japi" /> Gallery{" "}
          <img className="japi-animation team-japi" src={japi} alt="japi" />
        </h1>
      </div>
      <GallerySubHeader />
    </div>
  )
}

export default GalleryHeader