import React from 'react'

import './NameBlock.css'

function NameBlock ({name}) {    
    return (
        <div className='name_block'>
            {name}
        </div>
    )
}

export default NameBlock