import React, { FC } from 'react'

interface titleProps {
  title: string
  isTransition?: boolean
}

const Title:FC<titleProps> = ({ title, isTransition = false }) => {
  return (
    <span className='relative inline-block px-2 py-1 overflow-y-clip'>
      <span className={`relative left-4 z-10 font-black pr-4 inline-block ${isTransition && 'translate-y-full'}`}>{title}</span>
      <span className={`h-full absolute left-6 top-0 skew-x-[-20deg] before:highlighted before:h-full before:absolute before:w-full translate-x-[-15px] ${isTransition ? 'w-0' : 'w-full'} inset-0`} ></span>
    </span>
  )
}

export default Title