import React, { useEffect, useState } from 'react';

import "./style.css";

//! Date Format : Year, Month(0-11), Date, Hrs, Mins, Secs, Millisecs
let timeTo = new Date(2022, 2, 26, 0, 0, 0, 0);

let timeLimit = Math.floor(timeTo / 1000);

const timeIntervals = [60, 60, 24, 100],
    timeIntervalName = ["Days", "Hrs", "Mins", "Secs"];

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

function Timer() {

    let [display, setDisplay] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const timerInt = setInterval(() => {
            let displayList = countdown();

            setDisplay(displayList.reverse());

            if (displayList.length === 1) clearInterval(timerInt); // *Stop interval when EXPIRED*
        }, 1000);

        return () => clearInterval(timerInt);
    }, []);
    return (
        <div className='timer-wrapper py-5'>
            <div id="timer">
                {display.map((interval, index) => {
                    return (
                        <React.Fragment key={index}>

                            <div className="timer-int">
                                <div className="timer-int-value"><tt>{interval}</tt></div> {/* Time left in interval */}
                                <div className="timer-int-label">{timeIntervalName[index]}</div> {/* Interval name */}
                            </div>
                            {(index < display.length - 1 && ((window.innerWidth < 1000 && index !== 1) || window.innerWidth >= 1000)) && <div className="timer-int-colon">:</div>}

                        </React.Fragment>
                    )
                })}
                <div className='tag'>
                    <p>
                        #চেনেহৰ_বতৰা_লৈ_পছোৱা_আহিছে_ঐ<br />
                        #দশকৰ_পদূলিত_পছোৱাৰ_ভুমুকি
                    </p>
                    <p>
                        #Posua_reviving_exuberance!<br />
                        #espying_10_years_of_ecstasy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timer