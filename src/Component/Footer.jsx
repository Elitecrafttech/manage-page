import React from 'react'
import image from '../images/logo.svg'
import facebk from '../images/icon-facebook.svg'
import youtb from '../images/icon-youtube.svg'
import twitt from '../images/icon-twitter.svg'
import pin from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'


const Footer = () => {
  return (
    <footer className='size-full'>
        <div className='bg-[#E95B38] flex flex-col
            md:flex-row items-center justify-center
            p-[40px] gap-[90px] md:gap-[30%]'>
            <h1 className='font-semibold text-[40px]
             text-white text-center md:text-left
             md:text-[35px] md:w-[37vw]'>Simplify how your team works today.</h1>
            <button className='bg-white text-[#E95B38] p-[5px]
        w-[45vw] md:w-[12vw] rounded-full'>Get Started</button>
        </div>
        <div className='bg-[#1D1E25] p-[30px]'>
            <div className='flex flex-col-reverse md:flex-row items-center md:items-baseline justify-around gap-[40px] md:gap-0'>
                <div className='flex flex-col md:gap-[50px]'>
                    <img src={image} alt="" className='hidden md:flex md:bg-white '/>
                    <div className='flex gap-[15px]'>
                        <img src={facebk} alt="" />
                        <img src={youtb} alt="" />
                        <img src={twitt} alt="" />
                        <img src={pin} alt="" />
                        <img src={insta} alt="" />
                    </div>
                </div>
                <div className='flex text-[#FAFAFA] gap-[120px] md:gap-[100px]'>
                    <ul className='flex flex-col gap-[15px]'>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                    <ul className='flex flex-col gap-[15px]'>
                        <li>Careers</li>
                        <li>Community</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <label className='flex gap-[10px]'>
                    <input type="text" placeholder='Updates in your inbox…' className='rounded-full p-[5px] w-[70vw] md:w-[25vw]'/>
                    <button className='bg-[#E95B38] p-[4px] rounded-full
                w-[52px] text-center text-white font-semibold'>Go</button>
                </label>
            </div>
            <p className='hidden md:flex md:text-[#FAFAFA] md:justify-end '>Copyright 2020. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer