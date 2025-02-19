import React from 'react'

export default function Button({width, text}) {
  return (
    <>
    <div className=''>
    <div className="formBtn w-[60%]    ">
        
        <button type="submit" className={` ${width} text-white py-[10px] px-[20px] text-sm rounded hover:bg-[white] hover:text-[black] border border-white font-bold`}>{text}</button></div>
    </div>
    </>
  )
}
