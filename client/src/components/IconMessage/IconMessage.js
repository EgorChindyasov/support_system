import React from 'react'
import error from '../../img/error.png'
import warning from '../../img/warning.png'

import './IconMessage.css'

function IconMessage ({importance}) {

    const setImg = () => {
        if (importance === false) return warning
        else return error
    }

    return (
        <div className='img'>
            <img src={setImg()} className='icon' alt='ошибка' />
        </div>
    )
}

export default IconMessage