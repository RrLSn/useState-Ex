import React, { useState } from 'react'

const Color = () => {
    const [color, setColor] = useState('#761187')
  return (
    <div style={{width: '49.68rem', height: '43.12rem', background: color, marginTop: '5rem'}}>
       <div className='w-[70%] m-[auto] flex justify-between mt-[30rem]'>
         <div className='w-[6.31rem] h-[3.6rem] bg-[#871111] border cursor-pointer' onClick={() => setColor("#871111")}></div>
        <div className='w-[6.31rem] h-[3.6rem] bg-[#5A6628] border cursor-pointer' onClick={() => setColor("#5A6628")}></div>
        <div className='w-[6.31rem] h-[3.6rem] bg-[#113287] border cursor-pointer' onClick={() => setColor("#113287")}></div>
        <div className='w-[6.31rem] h-[3.6rem] bg-[#761187] border cursor-pointer' onClick={() => setColor("#761187")}></div>
       </div>
    </div>
  )
}

export default Color