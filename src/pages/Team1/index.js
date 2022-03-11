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
            A person filled with enthusiasm: such as. a : one who is ardently
            attached to a cause, object, or pursuit a sports car enthusiast. b : one
            who tends to become ardently absorbed in an interest.
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