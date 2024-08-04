import React from 'react'
import { TbBrandFacebook } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";


export default function Footer() {
  return (
    <>
<footer className='bg-[#243342] '>
  <div className='footer flex justify-center  text-center py-20 text-white'>
    <div className='w-1/3'>
      <h3 className='text-2xl font-semibold '>LOCATION</h3>
      <p className='py-5'>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="w-1/3"> 
      <h3 className='text-2xl font-semibold'>AROUND THE WEB</h3>
      <div className="icons flex justify-center gap-x-6 pt-6">
        <span className='icon'><TbBrandFacebook /></span>
        <span className='icon'><ImTwitter /></span>
        <span className='icon'><SiLinkedin /></span>
        <span className='icon'><IoLogoInstagram /></span>
      </div>
    
    </div>
    <div className="w-1/3">
    <h3 className='text-2xl font-semibold'>ABOUT FREELANCER</h3>
    <p className='px-10 pt-5 '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>

  </div>
  <div className="copyright text-center py-5 bg-[#06090B] text-white text-sm">
    <p>Copyright © Your Website 2021</p>
  </div>
  

  </footer>    
    
    </>
  )
}
