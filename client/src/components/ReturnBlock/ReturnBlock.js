import React from 'react'

import Prompt from '../Prompt/Prompt'

import returning from '../../img/return.png'

import './ReturnBlock.css'

const returnBlock = (display) => {
    // если url.pathname = /home
    if (window.location.pathname === '/home')
        return (
            null
        )
// если url.pathname = /closed
    if (window.location.pathname === '/closed')
        return (
            <div className='return'>
                <div className='return_block_prompt'>
                    <Prompt description={'Восстановить'} />
                </div>
                <div className='return_block'>
                    <span onClick={display}>
                        <img src={returning} className='icon' alt='восстановить' />
                    </span>
                </div>
            </div>
        )
    
    else {
        return null
    }
}

function ReturnBlock ( {display} ) {
    return (
        returnBlock(display)
    )
}

export default ReturnBlock