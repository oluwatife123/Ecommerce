import React from 'react'
import faces from '../assets/face1.jpg'
import face2 from '../assets/face2.jpg'
import face3 from '../assets/face3.jpg'
import face4 from '../assets/face4.jpg'

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
                    <img src={faces} alt="" />
                </div>
                <h4> Ann jane</h4>
                <p>Designer</p>
            </div>
            <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src={face2} alt="" />
                </div>
                <h4> Ben James</h4>
                <p>Marketer</p>
            </div> <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src={face3} alt="" />
                </div>
                <h4> Dan Brown</h4>
                <p>Editor</p>
            </div> <div className="teamCard1 w-full shadow-lg">
                <div className="teamCard1Img">
                    <img src={face4} alt="" />
                </div>
                <h4> John Smith</h4>
                <p>Manager</p>
            </div>
        </div>
    </div>
    </>
  )
}
