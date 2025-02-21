import React from 'react'

export default function Section2() {
  return (
    <>
                {/* my bg section2 */}
    <div className="section2 mt-28 mt- h-full lg:py-[80px]" >

      <div className='lg:w-[80%] w-[100%] justify-center lg:flex grid grid-cols-1 '>
         {/* 1 */}
         <main className="delivery w-[100%] ">
            <h1>delivery</h1>
            <h2>Choose what you want and select time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis 
                porttitor. Ut libero ante, varius quis ligula.</p>
            <div className='flex justify-end lg:justify-start'>
            <div className="deliveryOrd">Order Now</div>
              
            </div>
            
          {/* <img src="./02.png" alt="" /> */}

        </main>

        {/* 2 */}
        <aside className="reward w-[100%]">
            <h1>reward</h1>
            <h2>Choose what you want and select time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis 
                porttitor. Ut libero ante, varius quis ligula.
            </p>

          <div className='flex justify-start lg:justify-end'>
            <div className="deliveryOrd">Order Now</div>
              
            </div>
        </aside>
      </div>
     
    </div>
    </>
  )
}
