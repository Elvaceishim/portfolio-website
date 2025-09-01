import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Unplished = () => {
  return (
    <div id='unpublished' className='h-screen  flex flex-col justify-center items-center '>
        <h1>Unpublished Articles</h1>
        
    
            <Carousel >

            <CarouselContent >
            {[
        "Blockchain Content",
        "Technical Writing",
        "Community Management",
        "Social Media Strategy",
        "SEO Optimization",
        "Whitepaper Writing",
        "Web3 Marketing",
        "Content Strategy"
      ].map((skill, index) => (
        <CarouselItem key={index}>

            <div className='w-20'>
                {skill}
                </div></CarouselItem>
        
      
      ))}
   

  </CarouselContent>
          
  
  <CarouselPrevious  />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default Unplished
