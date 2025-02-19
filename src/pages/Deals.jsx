import React from 'react'

export default function Deals() {
  return (
    <>
    <div className="deals h-full" id='deal'>
            <h1 className='underline'>Deals</h1>
            <h2>Choose your dishes</h2>

             {/* order container */}
            <div className="dealSet lg:flex grid grid-cols-1 gap-2">

                {/* card1 */}
                <div className="card1 w-[100%]  mb-5 ">
                    <div>
                        <h1>Thai food
                        Vegan Set</h1>
                        <a href="#">Order Now</a>
                    </div>
                    
                    <div className="card1-img">
                        <img src="../public/foods/05.png" alt="" />
                    </div>
                </div>

                {/* card2 */}
            <div className="card2 w-[100%]  mb-5 ">
                    <div>
                        <h1>PIZZA
                            Mozzarella</h1>
                        <a href="#">Order Now</a>
                    </div>
                    <div className="card2-img">
                        <img src="../public/foods/03.png" alt="" />
                    </div>
                </div>

                {/* card3 */}
            <div className="card3 w-[100%]  mb-5">
                <div>
                        <h1>Burger
                            Beef Steak</h1>
                        <a href="#">Order Now</a>
                    </div>
                    <div className="card3-img">
                        <img src="../public/foods/02.png" alt="" />
                    </div>
            </div>
            </div>
    </div>
    </>
  )
}
