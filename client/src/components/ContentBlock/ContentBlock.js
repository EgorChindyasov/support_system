import React from 'react'
import CloseBlock from '../CloseBlock/CloseBlock'
import ReturnBlock from '../ReturnBlock/ReturnBlock'
import Arrow from '../Arrow/Arrow'
import IconMessage from '../IconMessage/IconMessage'
import NameBlock from '../NameBlock/NameBlock'

function ContentBlock ( {toggle, name, alert, importance, display, del} ) {

    return (
        <div className='block' onClick={toggle}>
            <IconMessage importance={importance}/>
            <CloseBlock display={display} del={del}/>
            <ReturnBlock display={display}/>
            <Arrow alert={alert}/>
            <NameBlock name={name}/>
        </div>
    )
}

export default ContentBlock