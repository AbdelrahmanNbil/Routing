import React from 'react'
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <>
    <section className=' bg-[#1ABC9C] flex justify-center items-center py-32'>
      <div>
      <div className="text-center flex justify-center items-center flex-col pb-10 ">
        <h1 className='text-4xl font-bold text-white py-5 '>ABOUT COMMPONENT</h1>
        <span className=' line text-white'><FaStar /></span>  
    </div>
  <div className="flex justify-center text-white text-sm ">
    <p className='w-1/3  '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    <p className='w-1/3 ps-5 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
    
      </div>
 
    </section>

    
    </>
  )
}
