import React from 'react'
import { Link} from 'react-router-dom'

import './AlertButton.css'

const AlertButton = ( {id} ) => {

    return (        
        <div className='btn_details'>
            <div className='btn_details_text'>
            <Link to={`/about/${id}`}>{id}</Link>
            </div>
        </div>
    )
}

export default AlertButton