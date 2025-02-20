import React from 'react'
import food from '../assets/foods/06.png'

export default function home() {
  return (
    <>

    <div className="for w-full top-10" id='home'>

        {/* Main-Section */}
        <div className="mainSection top-5  grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
                <div className='absolute lg:flex '>
                <main className="cafeS lg:mt-[100px] mt-9 w-[100%] lg:flex ">
                    <div className='w-[80%] ml-10'>
                    <h1 className=' lg:text-[3.2rem] text-center text-[2.3rem] ml-4 lg:ml-0'>SUSHI CAFE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. 
                        Ut libero ante, varius quis ligula.</p>
                    <div className="price sticky w-full lg:w-[90%]">
                        <ul className='block lg:flex ' >
                            <li className=''>Salmon</li>
                            <li className=''>Cheese</li>
                            <li className=''>Rice</li>
                        </ul>
                    </div>
                    </div>
                

                    <aside className="cafeSimage mt-6  lg:flex lg:ml-0 lg:mr-0 block ml-auto mr-auto w-[80%] lg:w-[45%]">
                <div>
                    <img src={food} className='lg:mb-8' alt="" />
                </div>
                    
                </aside>

                </main>
                

                </div>
                
            </div>

    </div>

   </>
  )
}
