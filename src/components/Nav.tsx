import React, { FC, useState } from 'react'
import { Link } from 'react-scroll';

export const Nav: FC = () => {
 const [isNavActive, setIsNavActive] = useState(false)

  return (
    <>
    <nav className='hidden md:block md:fixed md:z-50 md:w-full md:p-5'>
      <ul className='flex justify-end blackItalic gap-7'>
        <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="aboutMe" smooth={true} duration={500}>ABOUT ME</Link></li>
        <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="skills" smooth={true} duration={500}>SKILLS</Link></li>
        <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="project" smooth={true} duration={500}>PROJECT</Link></li>
      </ul>
    </nav>

    <nav className='fixed z-50 w-full p-5 md:hidden'>
      <div className='relative z-40 flex items-center justify-center w-10 h-10 rounded-full highlighted' onClick={() => setIsNavActive(!isNavActive)}>
       {!isNavActive &&<span className="text-2xl font-semibold material-icons">menu</span>}
       {isNavActive && <span className="text-2xl font-semibold material-icons">close</span>}
      </div>
      {isNavActive && 
        <div className='absolute inset-0 w-full h-screen bg-white/90'>
          <ul className='flex flex-col items-center justify-center h-full gap-10 blackItalic'>
            <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="aboutMe" smooth={true} duration={500}>ABOUT ME</Link></li>
            <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="skills" smooth={true} duration={500}>SKILLS</Link></li>
            <li className='cursor-pointer hover:text-gray-600'><Link onClick={() => setIsNavActive(!isNavActive)} activeClass='underline decoration-solid' spy={true} to="project" smooth={true} duration={500}>PROJECT</Link></li>
          </ul>
        </div>}
    </nav>
    </>
  )
}

export default Nav
