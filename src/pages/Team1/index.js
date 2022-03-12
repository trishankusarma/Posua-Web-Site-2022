import React from 'react'
import './style.css'
import japi from '../.././assets/japi.png'
import frame from '../.././assets/frame.png'
import team1 from '../.././assets/team1.png'
// import line1 from '../.././assets/line1.png'
// import line2 from '../.././assets/line2.png'


export default function Team1() {

  return (
    <>
      <div className="main">
        <div className="heading">

          <div className="heading-name">
            <img className='Japi' src={japi} alt="" />
            <span className="team">TEAM 1</span>
            <img className='Japi' src={japi} alt="" />
          </div>




          <p className="GallerySubHeader mt-5">
          With the arrival of spring and the departure of winter days, our Mother Nature expresses her joy of welcoming the calming rejuvenation via greenery and brightness all around her. Our Spring Fest, Posua is that venture which nurtures this celebration. This spree witnesses everyone coming together to work as a team, be it the students, the faculty members and the entire fraternity of NIT Silchar into its circle of gaiety and also ensures of breaking all the barriers among the crowd and bringing everyone together.
          </p>
          <hr className='GalleryHeaderBorder' />
          <div className="GalleryHeaderBorderIconSection">
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
            <img src={japi} className="MidJapi" alt='japi-img'></img>
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
          </div>

        </div>

        <div className="bottom-cards">
          <div className="outer-frame">
            <center>
              <div className="image">
                <img src={frame} alt="" />
              </div>
              <div className="frame-content">
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
              <div className="frame-content">
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
            <a href="/team" style={{ textDecoration: "none" }}><span className="team1">Volunteer</span></a>
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
              <div className="frame-content">
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
              <div className="frame-content">
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
              <div className="frame-content">
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
              <div className="frame-content">
                <span className="frame-name">Graphic Designer
                  <br />
                  <span className="frame-role">Graphic Designer</span></span>
              </div>
            </center>
          </div>



        </div>


      </div>
      {/* </div> */}
    </>
  )
}