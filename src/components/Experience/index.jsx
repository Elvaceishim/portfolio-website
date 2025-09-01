import React from 'react'
import plena from '../../../public/assets/plena.jpg.png'
import cillionaire from '../../../public/assets/cillionaire.jpg'
import unchained from '../../../public/assets/unchained.jpeg'
import am4 from '../../../public/assets/4ammarketing.jpeg'
import Image from 'next/image'

const Experience = () => {
  return (
    <section className="  px-4 md:px-10 py-10 md:py-16 flex flex-col gap-8 justify-center  items-center duration-1000 transition-opacity delay-50 ease-in " >
      <div className='md:w-2/3  flex flex-col gap-8  md:bg-black md:bg-opacity-60 md:py-10 md:px-20 md:rounded-lg ' >
      <h3 className="text-4xl font-bold text-center mb-8 "  id='experience'>Professional Experience</h3>
    <div className=" flex flex-col gap-8 ">
      {[
        {
          role: "Community Manager",
          company: "4am Marketing",
          period: "Aug 2024 - Present",
          image: am4,
          description: "Managing Telegram and Discord communities for blockchain projects, providing strategic community engagement and growth."
        },
        {
          role: "Content Writer & Social Media Manager",
          company: "Cillionaire",
          period: "Sep 2023 - Aug 2024",
          image: cillionaire,
          description: "Grew social media following from 22k to 32k through strategic content creation and community engagement."
        },
        {
          role: "Copywriter",
          company: "Plena Finance",
          period: "Jan 2022 - Aug 2022",
          image: plena,
          description: "Authored technical documentation including whitepapers and developed comprehensive marketing content."
        },
        {
            role: "Social Media Manager",
            company: "Unchained Global",
            period: "Jan 2022 - Aug 2022",
            image: unchained,
            description: "Authored technical documentation including whitepapers and developed comprehensive marketing content."
          }
      ].map((job, index) => (
        <div key={index} className="flex  justify-between p-6 rounded-lg shadow-sm hover:scale-105 ease-in duration-300 border border-tertiary ">
            <div>
            <h4 className="text-xl font-semibold mb-2 ">{job.role}</h4>
          <div className="flex justify-between text-primary ">
            <span>{job.company}</span>  
          </div>
            </div>
        

          <div className='rounded-full p-2 bg-secondary shadow-lg'>
          <Image src={job.image} alt={'alt'} width="64" height="64" className='rounded-full' />
          </div>
  
        </div>
      ))}
    </div>
      </div>
    
  </section>
  )
}

export default Experience
