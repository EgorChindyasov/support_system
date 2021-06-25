import React from 'react'

import hide_img from '../../img/hide.png'
import view_img from '../../img/view.png'

import './HideBlock.css'

const hideBlock = (display, hide) => {
    if (window.location.pathname === '/home') 
        return (
            <div className='hide_block'>
                <span onClick={hide}>
                    <img src={hide_img} className='icon' alt='скрыть' />
                </span>
            </div>
        )
    if (window.location.pathname === '/hided') 
        return (
            <div className='hide_block'>
                <span onClick={display}>
                    <img src={view_img} className='icon' alt='скрыть' />
                </span>
            </div>
        )
    else
        return (null)
}

function ReturnBlock ( {display, hide} ) {
    return (
        hideBlock(display, hide)
    )
}

export default ReturnBlock