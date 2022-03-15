import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import './style.css'
import japi from '../.././assets/japi.png'
import team1 from '../.././assets/team1.png'

import { webTeam_heads , webTeam_members } from '../../data/webTeam'
import { marketing_team_heads , marketing_team_members } from '../../data/marketing_team'

export default function Team1() {

  const [ members , setMembers ] = useState( null );

  const [ heads , setHeads ] = useState( null );

  const [ title , setTitle ] = useState( '' );

  const { id } = useParams();

  useEffect(() => {

     console.log( id )

      switch (id) {
        
        case '1':
          setHeads( webTeam_heads );
          setMembers( webTeam_members );
          setTitle("Web Team")
          break;

        case '2':
          setHeads( marketing_team_heads );
          setMembers( marketing_team_members );
          setTitle("Marketing Team");
          break;
      
        default:
          break;
      }
  }, [id])

  console.log( heads , members , title )
  

  return (
    <>
      <div className="main">
        <div className="heading">

          <div className="heading-name">
            <img className='Japi' src={japi} alt="" />
            <span className="team">{ title }</span>
            <img className='Japi' src={japi} alt="" />
          </div>




          <p className="GallerySubHeader mt-5">
             Comming Soon
          </p>
          <hr className='GalleryHeaderBorder' />
          <div className="GalleryHeaderBorderIconSection">
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
            <img src={japi} className="MidJapi" alt='japi-img'></img>
            <img src={japi} className="SmallJapi" alt='japi-img'></img>
          </div>

        </div>

        <div className="bottom-cards">
          
           {
               heads?.map(({ img, role, name }, index)=>(
                  
                <div className="outer-frame" key = {index}>
                  <center>
                    <div className="image">
                     <img src={img} alt="" />
                    </div>
                    <div className="frame-content">
                      <span className="frame-name">{ name }
                        <br />
                      <span className="frame-role">{ role }</span></span>
                  </div>
                </center>
    
                </div>
               ))
           }

        </div>


        { /* team 1 */}
        <center>
          <div className="bottom-heading">
            <a href="/team" style={{ textDecoration: "none" }}><span className="team1">Members</span></a>
          </div>
          <img src={team1} alt="" />
        </center>


        {/* bottom cards */}
        <div className="bottom-cards">

         
            {
              members?.map(({ img, role, name }, index)=>(
                 
                <div className="outer-frame" key = {index}>
                 <center>
                 <div className="image">
                    <img src={img} alt="" />
                 </div>
                 <div className="frame-content">
                    <span className="frame-name">{name}
                    <br />
                    <span className="frame-role">{role}</span></span>
                  </div>
                 </center>
               </div>
              ))
            }

        </div>


      </div>
      {/* </div> */}
    </>
  )
}