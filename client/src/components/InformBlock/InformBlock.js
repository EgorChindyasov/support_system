import React, {useState} from 'react'
import Alert from '../Alert/Alert'
import ContentBlock from '../ContentBlock/ContentBlock'

import './InformBlock.css'

export const AlertContext = React.createContext()

function InformBlock( {id, name, content, importance, display, del} ) {
    // состояние алерта
    const [alert, setAlert] = useState(false)
    // состояние наведения курсора на блок error
    const [hover, setHover] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    const toggleHover = () => setHover(prev => !prev)

    const setStyle = () => {
        let style = {}
        if (importance === false) {
            if (!hover) {
                style = {
                    border: '2px solid rgba(255, 230, 148, 0.5)'
                }
            }
            else {
                style = {
                    border: '2px solid rgb(253, 206, 49)'
                    }
            }
        }
        return style
    }

    return (
        <AlertContext.Provider value={alert}>
        <div className='inform_block'>
            <div className='wrapper' 
                 style={setStyle()} 
                 onMouseEnter={toggleHover} 
                 onMouseLeave={toggleHover}>
                <ContentBlock toggle={toggleAlert} 
                              name={name} 
                              alert={alert} 
                              importance={importance}
                              display={display}
                              del={del} />
                <Alert id={id} 
                       content={content} 
                       importance={importance} />
            </div>
        </div>
        </AlertContext.Provider>
    )
}

export default InformBlock