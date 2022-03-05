import React from 'react'
import About from '../../components/Home/About'
import Prev from '../../components/Home/Prev'
import Sponsers from '../../components/Home/Sponsers'
import Timer from '../../components/Home/Timer'
import './style.css'

const HomePage = () => {
  return (
    <>
      <About />
      <Sponsers />
      <Prev />
      <Timer />
    </>
  )
}

export default HomePage