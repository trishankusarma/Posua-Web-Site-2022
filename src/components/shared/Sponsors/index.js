import React from 'react'
import './style.css'
import japi from '../../../assets/japi.png'
import gplusLogo from '../../../assets/gplus_logo.png'
import { useLocation } from 'react-router-dom'


export default function Sponsers() {

    const location = useLocation();
    return (
        <div className={'sponsers pt-5'} >
            <h1 className={'text-center ' + (location.pathname === '/sponsors' ? 'pt-5' : '')}><img src={japi} className="japi-animation" alt='japi' /> SPONSORS <img src={japi} className="japi-animation" alt='japi' /></h1>
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
