import React from 'react'
import './style.css'
import japi from '../../../assets/japi.png'
import gplusLogo from '../../../assets/gplus_logo.png'

export default function Sponsers() {
    return (
        <div className='sponsers pt-5'>
            <h1 className='text-center'><img src={japi} alt='japi' /> SPONSORS <img src={japi} alt='japi' /></h1>
            <div className='sponser-img'>
                <img src={gplusLogo} alt='logo' />
                <img src={gplusLogo} alt='logo' />
                <img src={gplusLogo} alt='logo' />
                <img src={gplusLogo} alt='logo' />
                <img src={gplusLogo} alt='logo' />
            </div>
        </div>
    )
}
