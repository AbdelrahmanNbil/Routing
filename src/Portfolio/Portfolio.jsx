import React from 'react'
import img1 from '../assets/img/poert1.png'
import img2 from '../assets/img/port2.png'
import img3 from '../assets/img/port3.png'
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


export default function Portfolio() {
  
  return (
    <>
    <div className="py-5 text-center flex justify-center items-center flex-col">
      <h2 className='text-[#2C3E50] font-bold text-5xl pb-5'> portfolio component</h2>
      <span className='line2 text-[#2C3E50]'><FaStar /></span>
    </div>

    <div className="container mx-auto  py-5">
      <div className="parent grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img1} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img2} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img3} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img1} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img2} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
        <div className='relative transition-all duration-75 '>
        <img className='w-full rounded-xl' src={img3} alt="" />
        <div className="layer group-hover:opacity-80 text-center">
          <div className=' relative'>
          <span className=' absolute top-28 left-40 text-white text-7xl'><FaPlus /></span>
          </div>
        </div>
        </div>
       
      </div>

        
        

    </div>
    
    </>
  )
}
