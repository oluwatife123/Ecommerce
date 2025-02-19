import React from 'react'

export default function Shawa() {
  return (
    <> 
    <div className="shawa h-full">
        <h1>Specials Combo</h1>
        <h2>Our Best Sellers</h2>

        {/* all items div */}
    <div className="specialCombin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* item1 */}
        <div className="specialCombo w-[100%] hover:text-white hover:animate-pulse hover:bg-[red] mb-4">
            <h3>Thai Combo</h3>
            <p className="thaiCont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className='flex justify-center items-center mb-4'>
            <h5 className="thaiPrice bg-white rounded-full w-20 h-10 pt-2 ">12$</h5>
            </div>

            <div className="thai-btn">
                <button className="btn-thai">
                    <a href="#">ORDER NOW</a> 
                </button> 
                <img src="../public/foods/02.png" alt="" />
            </div>
        </div>
            {/* item2 */}
        <div className="specialCombo w-[100%] hover:text-white hover:animate-pulse hover:bg-[red] mb-4">
            <h3>Salmon Roll</h3>
            <p className="thaiCont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className='flex justify-center items-center mb-4'>
            <h5 className="thaiPrice bg-white rounded-full w-20 h-10 pt-2 ">15$</h5>
            </div>

            <div className="thai-btn">
                <button className="btn-thai">
                    <a href="#">ORDER NOW</a> 
                </button> 
                <img src="../public/foods/02.png" alt="" />
            </div>
        </div> 
            {/* item3 */}
        <div className="specialCombo w-[100%] hover:text-white hover:animate-pulse hover:bg-[red] mb-4">
            <h3>Spicy Set</h3>
            <p className="thaiCont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

            <div className='flex justify-center items-center mb-4'>
            <h5 className="thaiPrice bg-white rounded-full w-20 h-10 pt-2 ">11$</h5>
            </div>

            <div className="thai-btn">
                <button className="btn-thai">
                    <a href="#">ORDER NOW</a> 
                </button> 
                <img src="../public/foods/02.png" alt="" />
            </div>
        </div>
            {/* item4 */}
        <div className="specialCombo w-[100%] hover:text-white hover:animate-pulse hover:bg-[red] mb-4">
            <h3>Fish Sushi</h3>
            <p className="thaiCont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div className='flex justify-center items-center mb-4'>
            <h5 className="thaiPrice bg-white rounded-full w-20 h-10 pt-2 ">13$</h5>
            </div>
            
            {/* <!-- <div className="thai-btn"> --> */}
                <button className="btn-thai">
                    <a href="#">ORDER NOW</a> 
                </button> 
                <img src="../public/foods/02.png" alt="" />
            {/* <!-- </div> --> */}
        </div>
    </div>
    </div>
    </>
  )
}
