import React from 'react'
import closedIMG from '../../../img/closed.png'

import Prompt from '../../Prompt/Prompt'

import './ButtonToClosed.css'

const ButtonToClosed = () => {
    return (
        <div className="button_to_closed">
            <div className="prompt_closed">
                <Prompt description={'Закрытые'} />
            </div>
            <span>
                <a href="http://localhost:3000/closed">
                    <img src={closedIMG} className="icon_to_closed" alt='Закрытые' />
                </a>
            </span>
        </div>
    )
}

export default ButtonToClosed