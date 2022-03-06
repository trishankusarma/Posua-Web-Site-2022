import React from 'react'
import './style.css'
import japi from '../.././assets/japi.png'
import frame from '../.././assets/frame.png'
import team1 from '../.././assets/team1.png'
import line1 from '../.././assets/line1.png'
import line2 from '../.././assets/line2.png'


export default function Team1() {

return (
  <>
    <div className="main">
      <div className="heading">

        <div className="heading-name">
          <img src={japi} alt="" />
          <span className="team">TEAM 1</span>
          <img src={japi} alt="" />
        </div>

        <div className="heading-description">
          <span className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum assumenda quibusdam ipsam illum, accusantium earum ea nulla harum nihil fugit amet commodi eligendi consequuntur laudantium blanditiis ipsum ut corporis aliquam.</span>
        </div>

        <div className="line">
          <img src={line1} alt="" style={{ width: "40%" }} />
          <div className="japi">
            <img src={japi} alt="" style={{ width: "2em" }} />
            <img className="midImg" src={japi} alt="" style={{ width: "3em" }} />
            <img src={japi} alt="" style={{ width: "2em" }} />
          </div>
          <img src={line2} alt="" style={{ width: "40%" }} />
        </div>

        <div className="bottom-cards">
        <div className="outer-frame">
            <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>

          </div>

          <div className="outer-frame">
          <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>
          </div>
        </div>


        {/* team 1 */}
        <center>
          <div className="bottom-heading">
           <a href="/team" style={{textDecoration:"none"}}><span className="team1">Volunteer</span></a>
          </div>
          <img src={team1} alt="" />
        </center>


        {/* bottom cards */}
        <div className="bottom-cards">

          <div className="outer-frame">
            <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>

          </div>

          <div className="outer-frame">
          <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>
          </div>

          <div className="outer-frame">
          <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>
          </div>

          <div className="outer-frame">
          <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div class="frame-content">
                <span className="frame-name">Graphic Designer
                <br />
                <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>
          </div>



        </div>


      </div>
    </div>
  </>
)
}