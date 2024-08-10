import React from 'react'
import anisha from '../images/avatar-anisha.png'
import ali from '../images/avatar-ali.png'
import watts from '../images/avatar-richard.png'

const testimonia = () => {
  return (
    <section className='md:size-full flex flex-col gap-[50px] py-[60px] items-center'>
        <h1 className='self-center font-bold text-[35px] md:text-[40px]'>What they’ve said</h1>
        <div className='flex flex-col md:flex-row gap-[40px] md:gap-[20px] lg:gap[40px]'>
            <div className='bg-[#FAFAFA] flex flex-col items-center pb-[30px] px-[25px] gap-[30px] md:gap-0'>
                <img src={anisha} alt="" className='h-[60px] md:relative bottom-[25px]'/>
                <div className='flex flex-col items-center gap-[30px] md:gap-[10px]'>
                <h1 className='font-semibold text-[20px]'>Anisha Li</h1>
                <p className='w-[80vw] md:w-[26vw] text-center'>“Manage has supercharged our team’s workflow. The ability to maintain 
                    visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
            </div>
            <div className='bg-[#FAFAFA] flex flex-col items-center pb-[30px] px-[25px] gap-[30px] md:gap-0'>
                <img src={ali} alt="" className='h-[60px] md:relative bottom-[25px]'/>
                <div className='flex flex-col items-center gap-[30px] md:gap-[10px]'>
                <h1 className='font-semibold text-[20px]'>Ali Bravo</h1>
                <p className='w-[80vw] md:w-[26vw] text-center'>“We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”</p>
                </div>
            </div>
            <div className='bg-[#FAFAFA] flex flex-col items-center pb-[30px] px-[25px] gap-[30px] md:gap-0'>
                <img src={watts} alt="" className='h-[60px] md:relative bottom-[25px]'/>
                <div className='flex flex-col items-center gap-[30px] md:gap-[10px]'>
                <h1 className='font-semibold text-[20px]'>Richard Watts</h1>
                <p className='w-[80vw] md:w-[26vw] text-center'>“Manage allows us to provide structure and process. It keeps us organized 
                    an d focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>
            </div>
        </div>
        <button className='bg-[#E95B38] text-white p-[5px]
        w-[45vw] md:w-[12vw] rounded-full'>Get Started</button>
    </section>
  )
}

export default testimonia