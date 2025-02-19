import React from 'react'

export default function Section4() {
  return (
    <>
     <div className='h-full' id='help'>
     <div className="section4 grid grid-cols-1 lg:flex lg:gap-4 w-[100%] mt-4">
        <div className="section4Card1 w-full mb-4">
            <h3>Contact Us</h3>
            <h4>+123 70-5757-7789</h4>
            <p>Tel: +123 70 5757 7789</p>
            <p>Email: sanyaoluboluwatife9@gmail.com</p>
        </div>
        <div className="section4Card1 w-full mb-4">
            <h3>Get Direction</h3>
            <p>Lorem ipsum dolor sit consectetur
                 adipiscing. Donec ullamcorper neque dapibus.</p>
        </div> <div className="section4Card1 w-full mb-4">
            <h3>Opening Hours</h3>
            <p>Monday - Friday <span>9.00 - 20.00</span> </p>
            <p className="dayLine"></p>
            <p>Saturday - Sunday <span>8.00 - 22.00</span></p>
        </div>
    </div>
     </div>
    </>
  )
}
