import React from 'react'
import './style.css'

const team_profile = ({ name , role , img }) => {
  return (
    <div className="outer-frame">
    <center>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div class="frame-content">
        <span className="frame-name">{ name }
          <br />
          <span className="frame-role">{ role }</span></span>
      </div>
    </center>

  </div>

  )
}

export default team_profile