import React from 'react'
import arrow_up from '../../img/arrow_up.png'
import arrow_down from '../../img/arrow_down.png'

import './Arrow.css'

function Arrow ({alert}) {
    
    const isAlertShow = () => {
        if (alert === false) return arrow_down
        else return arrow_up
    }

    return (
        <div className='arrow'>
                <img src={isAlertShow()} className='arrow' alt='стрелка' />
        </div>
    )
}

export default Arrow