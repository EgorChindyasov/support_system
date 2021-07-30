import React, { useContext } from 'react'
import { ControlPanelContext } from '../App/App'

import './SortPanel.css'

const SortPanel = () => {

    const { sortPanel } = useContext(ControlPanelContext)
    const [sortPanelOption, handleChangeOption] = sortPanel

    return (
        <div className='sort_panel'>
            <select value={sortPanelOption} onChange={handleChangeOption}>
                <option value={0}>По-умолчанию</option>
                <option value={1}>Сначало ошибки</option>
                <option value={2}>Сначало предупреждения</option>
            </select>
        </div>
    )
}

export default SortPanel