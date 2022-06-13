import React, { useEffect, useState } from 'react'
import './style.css'
import grass from '../../../assets/grass.svg'
import tree from '../../../assets/tree.svg'
import nasoni from '../../../assets/nasoni.svg'
import posua from '../../../assets/posua.png'
import cloud from '../../../assets/cloud.svg'
import cloudlg from '../../../assets/cloudLight.svg'
import daystogo from '../../../assets/daystogo.svg'
import assamese from '../../../assets/assamesetag.svg'
import english from '../../../assets/englishtag.svg'

let timeTo = new Date(2022, 2, 26, 0, 0, 0, 0);

let timeLimit = Math.floor(timeTo / 1000);

const timeIntervals = [60, 60, 24, 100];

function countdown() {


    let timerDisplay = [0, 0, 0, 0];

    const timeNow = Math.floor(Date.now() / 1000);
    let timeDiff = timeLimit - timeNow;


    timeIntervals.forEach((interval, index) => {
        timerDisplay[index] = `${timeDiff % interval}`.padStart(2, "0");
        timeDiff = Math.floor(timeDiff / interval);
    });


    return timerDisplay;
}


function Cover() {

    let [display, setDisplay] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const timerInt = setInterval(() => {
            let displayList = countdown();

            setDisplay(displayList.reverse());

            if (displayList.length === 1) clearInterval(timerInt);
        }, 1000);

        const posua = document.getElementsByClassName('posua')
        posua[2].addEventListener("animationend", function () {
            posua[2].style.zIndex = 3
        }, false)

        return () => clearInterval(timerInt);
    }, []);
    return (
        <div className='cover'>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Kqzytj.json" background="transparent" speed="0.75" style={{ width: '100%', height: '50vh', position: 'absolute' }} loop autoplay></lottie-player>
            <img className='grass' src={grass} alt='grass' />
            <img className='tree' src={tree} alt='grass' />
            <img className='nasoni' src={nasoni} alt='grass' />
            <img className='posua' src={posua} alt='grass' />
            <img className='cloud1' src={cloud} alt='cloud' />
            <img className='cloud2' src={cloud} alt='cloud' />
            <img className='cloud-lg' src={cloudlg} alt='cloud' />
            <img className='daystogo' src={daystogo} alt='cloud' />
            <img className='assamese' src={assamese} alt='cloud' />
            <img className='english' src={english} alt='cloud' />
            {/* <p className='days'>{display[0]} days to go</p> */}
        </div>
    )
}

export default Cover