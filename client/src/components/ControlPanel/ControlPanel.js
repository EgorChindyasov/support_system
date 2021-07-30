import React from 'react'

import SearchPanel from '../SearchPanel/SearchPanel'
import SortPanel from '../SortPanel/SortPanel'

import './ControlPanel.css'

const ControlPanel = ({ handleChange, dataMatch }) => {
    return (
        <div className='control_panel'>
            <SearchPanel
                handleChange={handleChange} 
                dataMatch={dataMatch} />
            <SortPanel />
        </div>
    )
}

export default ControlPanel