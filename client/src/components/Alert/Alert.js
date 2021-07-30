import React, {useContext} from 'react'
import {AlertContext} from '../InformBlock/InformBlock'

import AlertButton from '../AlertButton/AlertButton'

import './Alert.css'

function Alert ( {id, content, importance} ) {

    const alert = useContext(AlertContext)
    if (!alert) return null

    const setStyle = () => {
        let style = {}
        if (importance === false) {
            style = {
                backgroundColor: 'rgba(243, 196, 102, .3)',
                color: 'rgb(143, 69, 0)' 
            }
        }
        return style
    }

    return (
        <div className='alert_block' style={setStyle()}>
            <div className='alert_content'>
                {content}
                <AlertButton id={id}/>
            </div>
        </div>
    )
}

export default Alert