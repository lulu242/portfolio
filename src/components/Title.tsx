import React, { FC } from 'react'

interface titleProps {
  title: string
}

const Title:FC<titleProps> = ({ title }) => {
  return (
    <span className='relative p-2'>
      <span className='relative left-[-10px] z-10 font-black pr-4'>{title}</span>
      <span className='h-full absolute left-0 top-0 translate-x-[-15px] skew-x-[-20deg] w-full overflow-hidden before:bg-[#EFFF8C] before:h-full before:absolute before:w-full inset-0' ></span>
    </span>
  )
}

export default Title