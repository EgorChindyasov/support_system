import React from 'react'

import './CloseBlock.css'

function CloseBlock ( {display} ) {
    return (
        <div className='close_block'>
            <span onClick={display} >&#10006;</span>
        </div>
    )
}

export default CloseBlock