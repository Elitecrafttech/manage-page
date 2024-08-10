import React from 'react'

const Details = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center
    gap-[60px] md:gap-[26%] pt-[30px] pb-[30px]'>
        <div className='flex flex-col gap-[30px] items-center md:items-start'>
            <h1 className='font-bold text-[30px] text-center w-[70vw] md:text-left md:w-[30vw]'>What’s different about Manage?</h1>
            <p className='w-[80vw] md:w-[25vw] text-center md:text-left'>Manage provides all the functionality your team needs, without 
               the complexity. Our software is tailor-made for modern digital 
               product teams. </p>
        </div>
        <div className='flex flex-col gap-[40px] pl-[20px] md:pl-[0px]'>
            <div className='flex flex-col gap-[15px]'>
            <div className='flex gap-[20px] bg-[#FFEFEB] md:bg-white'>
                <p className='bg-[#E95B38] p-[2px] rounded-full
                w-[50px] text-center text-white font-semibold'>01</p>
                <h1 className='font-bold'>Track company-wide progress</h1>
            </div>
            <p className='w-[93vw] md:w-[32vw]'>
                See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
            <div className='flex flex-col gap-[15px]'>
            <div className='flex gap-[20px] bg-[#FFEFEB] md:bg-white'>
                <p className='bg-[#E95B38] p-[2px] rounded-full
                   w-[50px] text-center text-white font-semibold'>02</p>
                <h1 className='font-bold'>Advanced built-in reports</h1>
            </div>
            <p className='w-[93vw] md:w-[32vw]'>
                Set internal delivery estimates and track progress toward company 
                goals. Our customisable dashboard helps you build out the reports 
                you need to keep key stakeholders informed.</p>
            </div>
            <div className='flex flex-col gap-[15px]'>
            <div className='flex gap-[20px] bg-[#FFEFEB] md:bg-white'>
                <p className='bg-[#E95B38] p-[2px] rounded-full
                   w-[50px] text-center text-white font-semibold'>03</p>
                <h1 className='font-bold'>Everything you need in one place</h1>
            </div>
            <p className='w-[93vw] md:w-[32vw]'>
                Stop jumping from one service to another to communicate, store files, 
                track tasks and share documents. Manage offers an all-in-one team 
                productivity solution.</p>
            </div>
        </div>
    </section>
  )
}

export default Details