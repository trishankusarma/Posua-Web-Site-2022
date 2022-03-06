import React from 'react'
import './style.css'
import grass from '../../../assets/grass.svg'
import tree from '../../../assets/tree.svg'

function Cover() {
    return (
        <div className='cover'>
            <img className='grass' src={grass} alt='grass' />
            <img className='tree' src={tree} alt='grass' />
        </div>
    )
}

export default Cover