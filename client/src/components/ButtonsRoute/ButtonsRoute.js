import React from 'react'

import ButtonstToHome from './ToHome/ButtonToHome'
import ButtonsToHided from './ToHided/ButtonToHided'
import ButtonToClosed from './ToClosed/ButtonToClosed'

import './ButtonsRoute.css'

const ButtonsRoute = () => {
    return (
        <div className="buttons_route">
            <ButtonstToHome />
            <ButtonsToHided />
            <ButtonToClosed />
        </div>
    )
}

export default ButtonsRoute