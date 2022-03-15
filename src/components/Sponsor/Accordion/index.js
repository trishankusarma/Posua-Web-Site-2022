import React, { useState } from 'react'
import './style.css'
import datas from '../../../data/Sponsor/accordion'
import arrow from '../../../assets/arrow.svg'
import japi from '../../../assets/japi.png'

function Accordion() {

    const [tabIndex, settabIndex] = useState(0)

    function openTab(e, index) {
        e.preventDefault()
        const content = document.getElementsByClassName('content')
        for (var i = 0; i < 3; i++) {
            content[i].style.maxHeight = 0
        }
        if (index !== tabIndex) {
            settabIndex(index)
            const content = document.getElementsByClassName('content')
            content[index].style.maxHeight = content[index].scrollHeight + 'px'
        } else {
            settabIndex(-1)
        }
    }

    return (
        <div className='acc-bg py-5'>
            {datas.map((data, index) => (
                <div key={index} className={"accordion py-3" + (index === tabIndex ? " accordion-active" : "")}>
                    <div className='dropdown'>
                        <button type='button' className='accordion_button' onClick={(e) => openTab(e, index)}><img src={japi} alt='japi' /><span> {data.heading} </span><img className='arrow' src={arrow} alt='arrow' /><img src={japi} alt='japi' /></button>
                        
                    </div>
                    <div className='content' style={{borderRadius:"0", background:"transparent",transform:"none"}}>
                        <p>
                            {data.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion