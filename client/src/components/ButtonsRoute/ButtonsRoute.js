import React from 'react'

import ButtonToHome from './ToHome/ButtonToHome'
import ButtonToHided from './ToHided/ButtonToHided'
import ButtonToClosed from './ToClosed/ButtonToClosed'

import './ButtonsRoute.css'

const ButtonsRoute = () => {
    return (
        <div className="buttons_route">
            <ButtonToHome />
            <ButtonToHided />
            <ButtonToClosed />
        </div>
    )
}

export default ButtonsRoute