import React from 'react'

export default function MenuDish() {
  return (
    <>
          {/* MenuDish container */}
    <div className='w-[100%] mt-20 h-full' id='menu'>
    <div className="menuDish text-center mb-10">
            <h1 className='underline'>Menu</h1>
            <h2>Choose your dishes</h2>
    </div>
    {/* items */}
    <div className="menuDish-Cont mt-4 grid grid-cols-1 lg:flex ">
            <div className="menuDish-Cont-right w-[100%] lg:flex">

                        {/* first */}
                <div className="menuDish-Cont-right-cont ">
                    <h4>SUSHI</h4>
                    <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Salmon Roll
                             <span className="line"></span>
                             <span>$18</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>
                    <h4>THAI FOOD</h4>
                    <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Spicy Fish Set
                             <span className="line"></span>
                             <span>$28</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>
                    <h4>PIZZA</h4>
                    <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Mozzarela Roll
                             <span className="line"></span>
                             <span>$14</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>


                       
                   
                </div>          

                          {/* second */}
                <div className="menuDish-Cont-left ">
                <div className="menuDish-Cont-right-cont">

                    <h4>SUSHI</h4>
                    <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Salmon Sushi
                             <span className="line"></span>
                             <span>$14</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>

                    <h4>PIZZA</h4>
                    <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Mozzarella Roll
                             <span className="line"></span>
                             <span>$18</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>
                    <h4>SUSHI</h4>
                     <div className="menuDish-header lg:w-[90%]">
                        <h3 className="menuDishS">Salmon Sushi
                             <span className="line"></span>
                             <span>$14</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>
                    {/* <h4>PIZZA</h4>
                    <div className="menuDish-header">
                        <h3 className="menuDishS">Mozzarella Roll
                             <span className="line"></span>
                             <span>$14</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>    
                    </div>
                    <h4>SUSHI</h4>
                    <div className="menuDish-header">
                        <h3 className="menuDishS">Salmon Roll
                             <span className="line"></span>
                             <span>$18</span>
                        </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper eget lectus porta euismod a libero.</p>     
                    </div> */}
                </div>
        </div>
            </div>  
           
    </div> 


    </div>
    </>
  )
}
