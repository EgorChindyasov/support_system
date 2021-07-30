import React, { useContext } from 'react'

import { ControlPanelContext } from '../App/App'

import './SearchPanel.css'

const Search = () => {

    const { searchPanel } = useContext(ControlPanelContext)
    const [dataMatch, handleChange] = searchPanel

    const setStyle = () => {
        let style = {}
        if (dataMatch) {
            style = {
                border: '1px solid red',
                boxShadow: '0 0 3px red'
            }
        }
        return style
    }

    return (
            <input 
                className='search_panel' 
                type='text' 
                placeholder='Поиск'
                style = {setStyle()} 
                onChange={handleChange} />
    )
}

export default Search