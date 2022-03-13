import React from 'react'
import './style.css'
import japi from '../.././assets/japi.png'
// import frame from '../.././assets/frame.png'
import team1 from '../.././assets/team1.png'

import Carousel from 'react-elastic-carousel';
import TeamDetails from '../../data/team';
import ProfileDetails from '../../data/profile';
import TeamProfile from './team_profile';
import TeamCard from './teamCard'

export default function team() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const allign_ment_type = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

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
            With the arrival of spring and the departure of winter days, our Mother Nature expresses her joy of welcoming the calming rejuvenation via greenery and brightness all around her. Our Spring Fest, Posua is that venture which nurtures this celebration. This spree witnesses everyone coming together to work as a team, be it the students, the faculty members and the entire fraternity of NIT Silchar into its circle of gaiety and also ensures of breaking all the barriers among the crowd and bringing everyone together.
          </p>
          <hr className='GalleryHeaderBorder' />
          <div className="GalleryHeaderBorderIconSection">
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
            <img src={japi} className="MidJapi" alt='japi-img'></img>
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
          </div>

        </div>

        <div className="container">
          {/* row 1 */}
          {
            TeamDetails.map(({ name, role, phoneNo, email, img }, index) => (

              < TeamCard type={allign_ment_type[index]} name={name} role={role} phoneNo={phoneNo} email={email} img={img} />
            ))
          }

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

          {
            ProfileDetails.map(({ name, role, img }) => (

              < TeamProfile name={name} role={role} img={img} />
            ))
          }



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