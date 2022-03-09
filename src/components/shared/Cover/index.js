import React from 'react'
import './style.css'
import grass from '../../../assets/grass.svg'
import tree from '../../../assets/tree.svg'
import nasoni from '../../../assets/nasoni.svg'
import posua from '../../../assets/posua.png'
import cloud from '../../../assets/cloud.svg'
import cloudlg from '../../../assets/cloudLight.svg'

function Cover() {
    return (
        <div className='cover'>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Kqzytj.json" background="transparent" speed="1" style={{ width: '100%', height: '50vh', position: 'absolute' }} loop autoplay></lottie-player>
            <img className='grass' src={grass} alt='grass' />
            <img className='tree' src={tree} alt='grass' />
            <img className='nasoni' src={nasoni} alt='grass' />
            <img className='posua' src={posua} alt='grass' />
            <img className='cloud1' src={cloud} alt='cloud' />
            <img className='cloud2' src={cloud} alt='cloud' />
            <img className='cloud-lg' src={cloudlg} alt='cloud' />
        </div>
    )
}

export default Cover