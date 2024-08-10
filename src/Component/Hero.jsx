import React from 'react'
import intro from '../images/illustration-intro.svg'

const Hero = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row
    items-center justify-center gap-[80px] md:gap-[70px] lg:gap-[180px] py-[50px]'>
        <div className='flex flex-col items-center md:items-start
        text-center md:text-left gap-[40px]'>
            <h1 className='font-extrabold text-[40px]
            md:w-[30vw]'>Bring everyone together to build better products.</h1>
            <p className='w-[75vw] md:w-[25vw]'>Manage makes it simple for software teams to plan day-to-day 
            tasks while keeping the larger team goals in view.</p>
            <button className='bg-[#E95B38] text-white p-[5px]
            w-[45vw] md:w-[12vw] rounded-full'>Get Started</button>
        </div>
        <div className=''>
            <img src={intro} alt="" />
        </div>
    </section>
  )
}

export default Hero