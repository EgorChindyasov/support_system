import React from 'react';
import { Link } from 'react-router-dom';

import homeIMG from '../../../img/home.png';

import Prompt from '../../Prompt/Prompt';

import './ButtonToHome.css';

const ButtonToHome = () => {
    return (
        <div className="button_to_home">
            <div className="prompt_home">
                <Prompt description={'На главную'} />
            </div>
            <span>
                <Link to="http://localhost:3000/home">
                    <img src={homeIMG} className="icon_to_home" alt='На главную' /> 
                </Link>
            </span>
        </div>
    )
};

export default ButtonToHome;