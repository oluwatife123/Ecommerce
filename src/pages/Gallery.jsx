import React from 'react'
import gallery from './gallery.json'

export default function Gallery() {
  return (
    <>
          {/* gallery */}
    <div className="gallery h-full" id='gallery'>
        <h1>Menu</h1>
        <h2>Choose your dishes</h2>
        <div className='lg:flex justify-center grid grid-cols-1 '>

          {
            gallery.map( gallery =>{
              return (
              <div className='w-full p-10' key={gallery.id}>
                <img src={gallery.image} alt="" className='w-full h-full rounded-lg shadow-xl' />
              </div>
              )
            })
          
          }
        

        </div>
       
    </div>

    </>
  )
}
