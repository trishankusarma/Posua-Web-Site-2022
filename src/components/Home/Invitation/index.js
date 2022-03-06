import React from 'react'
import './style.css'
import card from '../../../assets/invitation.png'

function Invitation() {
    return (
        <div className='invitation pt-5'>
            <img src={card} alt='invite' />
        </div>
    )
}

export default Invitation