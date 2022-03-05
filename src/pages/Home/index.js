import React from 'react'
import Prev from '../../components/Home/Prev'
import Sponsers from '../../components/Home/Sponsers'
import Timer from '../../components/Home/Timer'
import './style.css'

const HomePage = () => {
  return (
    <>
      <Sponsers />
      <Prev />
      <Timer />
    </>
  )
}

export default HomePage