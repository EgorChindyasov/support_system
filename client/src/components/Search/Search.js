import React from 'react'

import './Search.css'

const Search = ({ handleChange }) => {

    return (
            <input 
                className='search' 
                type='text' 
                placeholder='Поиск' 
                onChange={handleChange} />
    )
}

export default Search