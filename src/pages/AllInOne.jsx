import React from 'react'
import Home from './Home'
import Section2 from './Section2'
import Shawa from './Shawa'
import Deals from './Deals'
import MenuDish from './MenuDish'
import Gallery from './Gallery'
import Team from './Team'
import ShawaConnect from './ShawaConnect'
import Review from './Review'
import ReviewContent from './ReviewContent'
import Section4 from './Section4'
import GoogleMap from '../component/GoogleMap'
import About from './About'
import OrderPage from './OrderPage'

export default function AllInOne() {
  return (
    <>
    <div id='all'>

     <Home />
     <Section2 />
     <Shawa />
     <Deals />
     {/* <OrderPage /> */}
     <MenuDish />
     {/* <Gallery /> */}
     <Team />
     <About />
     <ShawaConnect />
     <Review />
     <ReviewContent />
     <Section4 />
     <GoogleMap />
  </div>
     
    </>
  )
}
