import React from 'react'

import './SortPanel.css'

const SortPanel = () => {
    return (
        <div className='sort_panel'>
            <select>
                <option>По-умолчанию</option>
                <option>Сначало ошибки</option>
                <option>Сначало предупреждения</option>
            </select>
        </div>
    )
}

export default SortPanel