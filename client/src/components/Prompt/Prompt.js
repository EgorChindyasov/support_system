import React from 'react'

import './Prompt.css'

const Prompt = ({ description }) => {
    return (
        <div className='prompt'>
            { description }
        </div>
    )
}

export default Prompt