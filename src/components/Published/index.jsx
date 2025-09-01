import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import p1 from '../../../public/assets/p1.jpeg'
import p2 from '../../../public/assets/p2.webp'
import p3 from '../../../public/assets/p3.jpeg'
import p4 from '../../../public/assets/p4.webp'
import p5 from '../../../public/assets/plena.jpg.png'
import Footer from '../Footer'
  

const Published = () => {
  return (
    <div id='published' className=' flex flex-col justify-center items-center '>
    {/* <h1 className='text-primary text-4xl mb-4'>Published Articles</h1> */}
       
    <Carousel className='' >

<CarouselContent >
{[
{
    image: p1,
    title: 'Is Bitcoin Ready for the Mainstream? How Rootstock is paving the way.',
    url: 'https://medium.com/@anselmelvis62/is-bitcoin-ready-for-the-mainstream-how-rootstock-is-paving-the-way-64c90ad63fa6'
},
{
  image: p5,
  title: "Plena Finance Whitepaper",
  url: 'https://medium.com/@anselmelvis62/stablecoin-in-nigeria-its-adoption-and-challenges-66dec8e5bd0e'
},
{
    image: p2,
    title: 'Is the Rise of Runes a New Era for Bitcoin?',
    url: 'https://hackernoon.com/is-the-rise-of-runes-a-new-era-for-bitcoin'
},
{
    image: p3,
    title: 'Paypal Abandoned Me. Crypto Saved Me.',
    url: 'https://hackernoon.com/paypal-abandoned-me-crypto-saved-me'
},
{
    image: p4,
    title: "Stablecoin in Nigeria. It's Adoption and Challenges",
    url: 'https://medium.com/@anselmelvis62/stablecoin-in-nigeria-its-adoption-and-challenges-66dec8e5bd0e'
},

].map((skill, index) => (
<CarouselItem key={index} className='w-40 h-[32rem] flex justify-center items-center'>

<div className=' flex justify-center gap-8 items-center flex-col text-center'>

  
    <Image src={skill.image} alt='alt' width={800} height={800} className='w-64 md:w-2/3 h-60 md:h-60 rounded-lg   '  />

    


    <a href={skill.url} target='blank' className=' w-60 animate-pulse hover:scale-110 underline md:text-2xl text-white z-10 '>{skill.title}</a>
   
                
                </div>
                </CarouselItem>


))}


</CarouselContent>


<CarouselPrevious  />
<CarouselNext />
</Carousel>



    </div>
  )
}

export default Published
