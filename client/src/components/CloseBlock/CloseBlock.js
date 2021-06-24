import React from 'react'
// import returning from '../../img/return.png'

import './CloseBlock.css'

// // выбор кнопки закрытия информационного блока
// const chooseClose = (display) => {
// // если url.pathname = /home
//     if (window.location.pathname === '/home')
//         return (
//             <div className='close_block'>
//                 <span onClick={display} >&#10006;</span>
//             </div>
//         )
// // если url.pathname = /closed
//     if (window.location.pathname === '/closed')
//         return (
//             <div className='return_block'>
//                 <span onClick={display}>
//                     <img src={returning} className='icon' alt='восстановить' />
//                 </span>
//             </div>
//         )
// }

// выбор кнопки закрытия информационного блока
const chooseClose = (display, del) => {
    // если url.pathname = /home
        if (window.location.pathname === '/home')
            return (
                <div className='close_block'>
                    <span onClick={display} >&#10006;</span>
                </div>
            )
    // если url.pathname = /closed
        if (window.location.pathname === '/closed')
            return (
                <div className='close_block'>
                    <span onClick={del} >&#10006;</span>
                </div>
            )
    }

function CloseBlock ( {display, del} ) {
    return (
        // <div className='close_block'>
        //     <span onClick={display} >&#10006;</span>
        // </div>
        chooseClose(display, del)
    )
}

export default CloseBlock