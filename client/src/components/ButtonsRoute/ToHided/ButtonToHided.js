import React from 'react'
import hidedIMG from '../../../img/hided.png'

import Prompt from '../../Prompt/Prompt'

import './ButtonToHided.css'

const ButtonToHided = () => {
    return (
        <div className="button_to_hided">
            <div className="prompt_hided">
                <Prompt description={'Скрытые'} />
            </div>
            <span>
                <a href="http://localhost:3000/hided">
                    <img src={hidedIMG} className="icon_to_hided" alt='Скрытые' />
                </a>

            </span>
        </div>
    )
}

export default ButtonToHided