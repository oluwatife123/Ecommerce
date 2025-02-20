import React from "react";
import case1 from '../assets/foods/gallery06-800x832.jpg'
import case2 from '../assets/foods/gallery07-800x444.jpg'
import case3 from '../assets/foods/gallery02.jpg'
import galleryData from "./gallery.json"; // Ensure the correct path

export default function Gallery() {
  return (
    <>
      {/* Gallery Section */}
      <div className="gallery h-full" id="gallery">
        <h1 className="text-center text-2xl font-bold text-red-600">Menu</h1>
        <h2 className="text-center text-lg text-gray-700 mb-6">Choose your dishes</h2>

        <div className="lg:flex justify-center grid grid-cols-1 gap-6">
        
            <div className="w-full p-4" >
              <img
                src={case1}
                alt='case'
                className="w-full h-full rounded-lg shadow-xl"
              />
            </div>

            <div className="w-full p-4" >
              <img
                src={case2}
                alt='case'
                className="w-full h-full rounded-lg shadow-xl"
              />
            </div>

            <div className="w-full p-4" >
              <img
                src={case3}
                alt='case'
                className="w-full h-full rounded-lg shadow-xl"
              />
            </div>
         
        </div>
      </div>
    </>
  );
}
