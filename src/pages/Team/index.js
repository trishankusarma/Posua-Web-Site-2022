import React from 'react'
import './style.css'
import japi from '../.././assets/japi.png'
import c1 from '../.././assets/c1.png'
import c2 from '../.././assets/c2.png'
import c3 from '../.././assets/c3.png'
import c4 from '../.././assets/c4.png'
import c5 from '../.././assets/c5.png'
import c6 from '../.././assets/c6.png'
import c7 from '../.././assets/c7.png'
import c8 from '../.././assets/c8.png'
import c9 from '../.././assets/c9.png'
import c10 from '../.././assets/c10.png'
import c11 from '../.././assets/c11.png'
import c12 from '../.././assets/c12.png'
import c13 from '../.././assets/c13.png'
import c14 from '../.././assets/c14.png'
import c15 from '../.././assets/c15.png'
import c16 from '../.././assets/c16.png'
import frame from '../.././assets/frame.png'
import team1 from '../.././assets/team1.png'
import line1 from '../.././assets/line1.png'
import line2 from '../.././assets/line2.png'

import Carousel from 'react-elastic-carousel';



export default function team() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="main">
        <div className="heading">

          <div className="heading-name">
            <img className='Japi' src={japi} alt="" />
            <span className="team">TEAM POSUA</span>
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

        <div className="container mt-4">
          {/* row 1 */}
          <div className="cards">
            <div className="left-card">
              <div className="content">
                <img src={c1} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Prof. Sivaji Bandyopadhyay</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Chief Patron</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: 03842-242273</span></div>
                  <div><span className="email">Email: director@nits.ac.in</span></div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="content">

                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Prof. Mokaddes Ali Ahmed</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">President</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: 03842-242273</span></div>
                  <div><span className="email">Email: ali.mokaddes@gmail.com</span></div>
                </div>

                <img src={c2} alt="" />
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="cards">
            <div className="left-card">
              <div className="content">
                <img src={c3} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Dr. Ripon Patgiri</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Vice President</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +919508631596</span></div>
                  <div><span className="email">Email: ripon.patgiri@gmail.com</span></div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="content">

                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Dr. Malaya Dutta Borah</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Vice President</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: 03842-242273</span></div>
                  <div><span className="email">Email: malayaduttaborah@gmail.com</span></div>
                </div>

                <img src={c4} alt="" />
              </div>
            </div>
          </div>

          {/* row 3 */}
          {/* <div className="cards"> */}
          <div className="mid-card">
            <div className="content">
              <img src={c5} alt="" />
              <div className="text">
                <div style={{ paddingBottom: "0.1em" }}><span className="name">Dr. Pranjit Barman</span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="role">Mentor</span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +919435374128</span></div>
                <div><span className="email">Email: xyz@gmail.com</span></div>
              </div>
            </div>
            {/* </div> */}


          </div>

          {/* row 4 */}
          <div className="cards">
            <div className="left-card">
              <div className="content">
                <img src={c6} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Debajit Bora</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Convenor</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +916000364669</span></div>
                  <div><span className="email">Email: debajitbora1999@gmail.com</span></div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="content">

                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Arindam Kharghoria</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Chief Coordinator</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +918638509919</span></div>
                  <div><span className="email">Email: arindam_ug@civil.nits.ac.in</span></div>
                </div>

                <img src={c7} alt="" />
              </div>
            </div>
          </div>

          {/* row 5 */}
          <div className="cards">
            <div className="left-card">
              <div className="content">
                <img src={c8} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Sonjyoti Nath</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Chief Coordinator</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +918133094439</span></div>
                  <div><span className="email">Email: nsonjyoti@gmail.com</span></div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="content">

                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Jyotirmoy Deka</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Treasurer</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +917896107708</span></div>
                  <div><span className="email">Email: jyotirmoydeka05@gmail.com</span></div>
                </div>

                <img src={c9} alt="" />
              </div>
            </div>
          </div>

          {/* row 6 */}
          <div className="cards">
            <div className="left-card">
              <div className="content">
                <img src={c11} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Monjita Baruah </span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Executive Head</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +919706869200</span></div>
                  <div><span className="email">Email: monjita_ug@ece.nits.ac.in</span></div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="content">
              <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Akash Hazarika</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Executive Head</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +919101754334</span></div>
                  <div><span className="email">Email: akashhazarika2898@gmail.com</span></div>
                </div>
              

                <img src={c10} alt="" />
              </div>
            </div>
          </div>


          {/* row 7 */}
          <div className="cards">

            <div className="left-card">
              <div className="content">
                <img src={c13} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Kamakhya Prasad Sut</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Executive Head</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +918638850004</span></div>
                  <div><span className="email">Email: sutkamakhyaprasad33@gmail.com</span></div>
                </div>
                
              </div>
            </div>

            <div className="right-card">
              <div className="content">
              <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Bikashjyoti Das</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Executive Head</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +918638574294</span></div>
                  <div><span className="email">Email: bikashjyotidas123@gmail.com</span></div>
                </div>
               

                <img src={c12} alt="" />
              </div>
            </div>


          </div>


          {/* row 8 */}
          <div className="cards">

            <div className="left-card">
              <div className="content">
                <img src={c15} alt="" />
                <div className="text">
                  <div style={{ paddingBottom: "0.1em" }}><span className="name">Rishiraj Paul Chowdhury</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="role">Marketing Head</span></div>
                  <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +919706262131</span></div>
                  <div><span className="email">Email: hrishipaul936@gmail.com</span></div>
                </div>
               
              </div>
            </div>

            <div className="right-card">
              <div className="content">
              <div className="text">
                <div style={{ paddingBottom: "0.1em" }}><span className="name">Nitesh Pandey</span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="role">Marketing Head</span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +918011648293</span></div>
                <div><span className="email">Email: niteshpandey735@gmail.com</span></div>
              </div>
               

                <img src={c14} alt="" />
              </div>
            </div>


          </div>


          {/* row 9 */}
          <div className="mid-card">
            <div className="content">
              <img src={c16} alt="" />
              <div className="text">
                <div style={{ paddingBottom: "0.1em" }}><span className="name">Priyangshu Goswami </span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="role">Marketing Head</span></div>
                <div style={{ paddingBottom: "0.1em" }}><span className="contact">Contact: +917002140341</span></div>
                <div><span className="email">Email: priyangshugoswami1999@gmail.com </span></div>
              </div>
            </div>
          </div>

        </div>


        {/* team 1 */}
        <center>
          <div className="bottom-heading">
            <a href="/team1" style={{ textDecoration: "none" }}><span className="team1">TEAM 1</span></a>
          </div>
          <img src={team1} alt="" />
        </center>


        {/* bottom cards */}
        <Carousel breakPoints={breakPoints} className="bottom-cards">

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


          {/* <img src={c1} alt="" />
<img src={c2} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" /> 
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" />
<img src={frame} alt="" /> */}


        </Carousel>


        {/* </div> */}
      </div>
    </>
  )
}