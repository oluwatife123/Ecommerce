import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="footerSection">
        <div className="footerList">
            <ul className=''>
                <li className='hover:text-lg hover:text-[red]' ><a href="#menu">Menu</a></li>
                <li className='hover:text-lg hover:text-[red]'><a href="#gallery">Gallery</a></li>
                <li className='hover:text-lg hover:text-[red]'><a href="#deal">Blog</a></li>
                <li className='hover:text-lg hover:text-[red]'><a href="#help">Help</a></li>
            </ul>
        </div>
        <p>© Copyright 2023 Boluwatife - All Rights Reserved</p>
    </footer>
    </>
  )
}
