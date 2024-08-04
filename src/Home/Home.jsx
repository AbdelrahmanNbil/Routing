import React from 'react'
import man from '../assets/img/avataaars (2).svg'
import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <div className='home bg-[#1ABC9C] max-h-screen flex justify-center items-center flex-col py-10'>
        <img src={man} alt="devolper" className='w-1/6' />
        <h1 className='text-white text-5xl font-semibold pb-4'>start Framework</h1>
        <span className='line text-white'><FaStar /></span>
        <p className='py-4 text-white font-normal'>Graphic Artist - Web Designer - Illustrator</p>
        </div>    
    
    </>
  )
}
