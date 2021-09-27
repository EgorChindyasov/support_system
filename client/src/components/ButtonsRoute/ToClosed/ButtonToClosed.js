import React from 'react';
import { Link } from 'react-router-dom';

import closedIMG from '../../../img/closed.png';

import Prompt from '../../Prompt/Prompt';

import './ButtonToClosed.css';

const ButtonToClosed = () => {
    return (
        <div className="button_to_closed">
            <div className="prompt_closed">
                <Prompt description={'Закрытые'} />
            </div>
            <span>
                <Link to="/closed">
                    <img src={closedIMG} className="icon_to_closed" alt='Закрытые' />
                </Link>
            </span>
        </div>
    )
};

export default ButtonToClosed;