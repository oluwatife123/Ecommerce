import React from 'react'

export default function ReviewContent() {
  return (
    <>
        {/* reviewContent */}
    <div className="reviewContent">
        <div className=''>
            <h3>Write a Review</h3>
            <p className='w-full lg:px-[105px] px-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero 
            varius quis ligula, aliquet consectetur tortor.</p>
        </div>

                {/* my form */}
        <div className=' px-5'>
            <div className=''>
            <div className="form">
                <div className="formName mb-3 w-[100%] lg:flex gap-6" >
                    <div className='lg:w-[50%]'>
                    <input type="text" name="name" placeholder="Name" required="required" className="form-control display-7 w-full mb-3 shadow-lg" id="Name-form04-1q" />
                    </div>
                    
                    {/* <!-- <div data-for="Email" className="formEmail"> --> */}
                    <div className='lg:w-[50%]'>
                    <input type="email" name="Email" placeholder="Email" className="form-control shadow-lg w-full display-7" required="required" id="Email-form04-1q" />
                    </div>
                    
                </div>
            </div>
                {/* for phone and textarea */}
            <div className="formPhone mb-3">
                <input type="tel" name="Phone" placeholder="Phone Number" className="form-control shadow-lg w-full display-7" required="required" id="Phone-form04-1q" />
            </div>
            <div className="formMessage mb-3">
                <textarea name="Message" placeholder="Your Message" required="required" className="form-control display-7 shadow-lg w-full" id="Message-form04-1q"></textarea>
            </div>

            </div>
            

        </div>
            
            
    </div>  
    </>
  )
}
