import React from 'react'
import face1 from '../assets/img/face1.jpg'

export default function Review() {
  return (
    <>
     <div>

      {/* review */}
    <div className="review">
        <h1>Reward</h1>
            <h2>Clients reward</h2>
           <div className="reviewS">
                    <div className="reviewSImg">
                        <img src={face1} alt="" />
                    </div>
                    <h4> Ann jane</h4>
                    <p className='dot'>Designer</p>
                </div>
            <div className="reviewCont ">
              <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus
                ipsum semper, amet luctus turpis porttitor.
              </p>
              </div>
    </div>

     </div>
    </>
  )
}
