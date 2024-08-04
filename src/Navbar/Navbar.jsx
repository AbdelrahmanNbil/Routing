import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    <nav className='bg-[#2C3E50] '>
    <div className='container flex justify-between items-center py-5 mx-auto  px-10'>
        <div className="logo">
            <Link to='' className='text-4xl font-bold text-white'>Start Framework</Link>
        </div>
        <div className="taps">
            <ul className='flex justify-around items-center text-lg text-white font-bold'>

                <li><NavLink to='about'>About</NavLink></li>
                <li className='px-12'><NavLink to='portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='contact'>Contact</NavLink></li>
              
                
            </ul>
        </div>

    </div>


    </nav>
    
    
    </>
  )
}
