import React from 'react'
import About from '../../components/Home/About'
import Accordion from '../../components/Home/Accordion'
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
      <Accordion />
      <Timer />
    </>
  )
}

export default HomePage