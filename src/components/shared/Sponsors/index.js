import React from 'react'
import './style.css'
import japi from '../../../assets/japi.png'
import gplusLogo from '../../../assets/gplus_logo.png'
import { useLocation } from 'react-router-dom'


export default function Sponsers() {

    const location = useLocation();
    return (
        <div className={'sponsers ' + (location.pathname === '/sponsors' ? 'mt-lg-5 pt-5' : 'pt-5')} >
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
