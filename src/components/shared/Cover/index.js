import React from 'react'
import './style.css'
import grass from '../../../assets/grass.svg'
import tree from '../../../assets/tree.svg'
import nasoni from '../../../assets/nasoni.svg'
import posua from '../../../assets/posua.png'

function Cover() {
    return (
        <div className='cover'>
            <img className='grass' src={grass} alt='grass' />
            <img className='tree' src={tree} alt='grass' />
            <img className='nasoni' src={nasoni} alt='grass' />
            <img className='posua' src={posua} alt='grass' />
        </div>
    )
}

export default Cover