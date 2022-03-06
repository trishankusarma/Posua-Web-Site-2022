import React from 'react'
import './style.css'
import japi from '../../../assets/japi.png'
import pran from '../../../assets/pran_logo.svg'
import oilIndia from '../../../assets/oil_india_logo.svg'
import indianOil from '../../../assets/indian_oil_logo.svg'
import hyundai from '../../../assets/hyundai_logo.png'
import nrl from '../../../assets/nrl_logo.png'

function Prev() {
    return (
        <div className='prev pt-5'>
            <h1 className='text-center'><img src={japi} alt='japi' /> PREVIOUS YEAR SPONSORS <img src={japi} alt='japi' /></h1>
            <div className='sponser-img'>
                <img src={hyundai} alt='logo' />
                <img src={pran} alt='logo' />
                <img src={oilIndia} alt='logo' />
                <img src={nrl} alt='logo' />
                <img src={indianOil} alt='logo' />
            </div>
        </div>
    )
}

export default Prev