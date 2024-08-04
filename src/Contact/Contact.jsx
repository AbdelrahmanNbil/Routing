import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <section>
      <div className='text-center py-8 flex justify-center items-center flex-col'> 
        <h2 className='text-5xl font-semibold text-[#2C3E50] pb-4'>conatct section</h2>
        <span className='line2 text-[#2C3E50]'><FaStar /></span>
      </div>
      <div>
        <form className='text-center'>
          <input type="text" placeholder='user Name :' name='user-name' />
          <br />
          <input type="text" placeholder='user Age : 'name='user-age '/>
          <br />
          <input type="email" placeholder='user Email : 'name='user-email' />
          <br />
          <input type="password" name="user-pass" placeholder='UserPassword' />
          <br />
          <input  type="button" value="send Massage" className=' hover:cursor-pointer mb-5 text-white w-48 bg-[#1ABC9C] '  />
        </form>
      </div>
    </section>
    
    
    </>
  )
}
