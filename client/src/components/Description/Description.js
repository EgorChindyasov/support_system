import React from 'react'

import './Description.css'

const Description = ({ description }) => {
    return (
        <div className='description'>
            { description }
        </div>
    )
}

export default Description