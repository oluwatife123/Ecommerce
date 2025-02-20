import React from 'react'
import last from '../assets/foods/05.png'

export default function ShawaConnect() {
  return (
    <>
        {/* Shawa Connect */}
    <div className="shawaConnect h-full w-[100%] grid grid-cols-1 lg:flex pb-10">
        <div className="connectImg block ml-auto mr-auto lg:w-[30%] w-[80%] pb-6 lg:pb-0">
            <img src={last} alt="" />
        </div>
        <div className="connectCont lg:w-[50%] lg:mt-20">
            <h3 className='text-center lg:text-left'>Let's Connect</h3>
            <p className="connect-Cont lg:text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className="subCont block lg:flex lg:gap-2 gap-3 ">
                <input className="subscribe ml-[-10px] lg:p-[1rem] px-5 shadow-lg mb-5 lg:mb-0" type="email" name="email" placeholder="input your email" />
                <button className="subscribebtn lg:w-[100%] w-full ">
                    subscribe
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
