import React from 'react'

export default function Team() {
  return (
    <>
         {/* Team  */}
    <div className="team lg:block h-full lg:h-[100vh]">
        <div className='pt-10 lg:pt-10 mb-3'>
            <h1>team</h1>
            <h2>Behind the taste</h2>
        </div>  
            {/* team cards */}
        <div className="teamCard lg:p-[80px] px-7 grid grid-cols-1 gap-3 md:grid-cols-2 lg:flex">
            <div className="teamCard1 w-full shadow-lg ">
                <div className="teamCard1Img">
                    <img src="../public/img/face1.jpg" alt="" />
                </div>
                <h4> Ann jane</h4>
                <p>Designer</p>
            </div>
            <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src="../public/img/face2.jpg" alt="" />
                </div>
                <h4> Ben James</h4>
                <p>Marketer</p>
            </div> <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src="../public/img/face3.jpg" alt="" />
                </div>
                <h4> Dan Brown</h4>
                <p>Editor</p>
            </div> <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src="../public/img/face4.jpg" alt="" />
                </div>
                <h4> John Smith</h4>
                <p>Manager</p>
            </div>
        </div>
    </div>
    </>
  )
}
