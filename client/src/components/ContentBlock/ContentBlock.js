import React from 'react'

import CloseBlock from '../CloseBlock/CloseBlock'
import ReturnBlock from '../ReturnBlock/ReturnBlock'
import HideBlock from '../HideBlock/HideBlock'
import Arrow from '../Arrow/Arrow'
import IconMessage from '../IconMessage/IconMessage'
import NameBlock from '../NameBlock/NameBlock'

import './ContentBlock.css'

function ContentBlock ( {toggle, name, importance, display, del, hide} ) {

    return (
        <div className='block' onClick={toggle}>
            <IconMessage importance={importance}/>
            <NameBlock name={name}/>
            <Arrow />
            <HideBlock display={display} hide={hide}/>
            <ReturnBlock display={display}/>
            <CloseBlock display={display} del={del}/>
        </div>
    )
}

export default ContentBlock