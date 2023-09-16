import React from 'react'

function Button({bgColor, handleChangeColor}) {
  return (
    <div>
        <p className='outline-none px-6 py-2 m-2 cursor-pointer rounded text-white' style={{backgroundColor:bgColor}} onClick={()=>handleChangeColor(bgColor)}>{bgColor}</p>
    </div>
  )
}

export default Button