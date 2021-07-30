import React from 'react'

import SearchPanel from '../SearchPanel/SearchPanel'
import SortPanel from '../SortPanel/SortPanel'

import './ControlPanel.css'

const ControlPanel = () => {
    return (
        <div className='control_panel'>
            <SearchPanel />
            <SortPanel />
        </div>
    )
}

export default ControlPanel