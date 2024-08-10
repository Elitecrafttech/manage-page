import React from 'react'
import image from '../images/logo.svg'
import open from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

const home = () => {
  return (
    <nav className='size-full flex h-[70px] items-center
    justify-between md:justify-normal px-[30px] md:px-[60px]
    md:gap-[100px] lg:gap-[200px]'>
        <img src={image} alt="" />
        <div className='hidden md:flex md:gap-[100px] lg:gap-[200px]'>
        <ul className='flex md:gap-[15px] lg:gap-[40px] font-semibold'>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
        <button className='bg-[#E95B38] text-white p-[2px]
        w-[9vw] rounded-full'>Get Started</button>
        </div>
        <div className='md:hidden'>
        <img src={open} alt="" />
        <img src={close} alt="" className='hidden'/>
        </div>
    </nav>
  )
}

export default home