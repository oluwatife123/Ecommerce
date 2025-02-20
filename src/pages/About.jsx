import React from 'react'
import Section4 from './Section4'
import Footer from '../component/Footer'
import she from '../public/img/face1.jpg'

export default function About() {
  return (
    <>
        {/* My About page */}
 <div className='h-full' id='about'>
    <div className="aboutContent lg:p-[80px] p-0 mt-15 lg:mt-8">
    <h3 className=' mb-10'>About us</h3>
    <p className='w-full px-5 font-normal'>Our Restaurant is dedicated to satisfying the
            diverse culinary preferences of the local 
            populace in sub-Saharan Africa. Our unique 
            menu features a carefully curated selection
            of contemporary and Nigerian dishes, some 
            of which are also enjoyed on dining tables
            in other African countries. Born out of 
            the desire to cater to both local and 
            continental gastronomic cravings, the
            our brand prides itself on delivering
            fresh, delectable meals, pastries,
            sandwiches, and beverages in a welcoming
            atmosphere. Our restaurants are recognized
            for their vibrant decor and inviting
            ambiance, offering both dine-in and 
            grab-and-go options with the finest 
            quality cuisine.
            We are committed to serving you with the best of meal.
    </p>
    </div>
        {/* My Section */}
    <div>
    <Section4 />
    </div>

        {/* my team into */}
    <div className="teamIntro">
            <h1 className=''>The Team</h1>
            <h2 className=''>Meet the Team</h2>
           <div className="teamIntro1">
                    <div className="teamIntro1Img">
                        <img src={she} alt=""  />
                    </div>
                    <h4> Ann jane</h4>
                    <p>Designer</p>
                </div>
            <div className="teamIntro1Cont w-[100%] lg:px-[150px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitDonecnequedapibusipsum semper, amet luctus turpis porttitor.
            </div>
    </div>

        {/* my footer */}
    {/* <div>
        <Footer />
    </div> */}
 </div>
    

    </>
  )
}
