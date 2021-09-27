import React from 'react';
import { Link } from 'react-router-dom';

import hidedIMG from '../../../img/hided.png';

import Prompt from '../../Prompt/Prompt';

import './ButtonToHided.css';

const ButtonToHided = () => {
    return (
        <div className="button_to_hided">
            <div className="prompt_hided">
                <Prompt description={'Скрытые'} />
            </div>
            <span>
                <Link to="/hided">
                    <img src={hidedIMG} className="icon_to_hided" alt='Скрытые' />
                </Link>

            </span>
        </div>
    )
};

export default ButtonToHided;