import React, { FC, useState } from 'react'
import { Link } from 'react-scroll';

export const Nav: FC = () => {

  return (
    <nav className='fixed z-50 w-full p-5'>
      <ul className='flex justify-end text-2xl italic font-extrabold gap-7'>
        <li className='cursor-pointer hover:text-gray-600'><Link activeClass='underline decoration-solid' spy={true} to="aboutMe" smooth={true} duration={500}>ABOUT ME</Link></li>
        <li className='cursor-pointer hover:text-gray-600'><Link activeClass='underline decoration-solid' spy={true} to="skills" smooth={true} duration={500}>SKILLS</Link></li>
        <li className='cursor-pointer hover:text-gray-600'><Link activeClass='underline decoration-solid' spy={true} to="project" smooth={true} duration={500}>PROJECT</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
