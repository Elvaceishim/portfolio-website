'use client'
import React from 'react'
import memoji from "../../../public/assets/elvis3.jpeg";
import Navbar from '../Navbar'
import Image from "next/image";
import Published from '../Published';
import Unplished from '../Unpublished';
import Footer from '../Footer';
import { FaArrowLeft } from "react-icons/fa";


const PortfolioComponent
 = () => {
  return (

    <div className='portfolio-back min-h-screen flex flex-col justify-center  '>
     <a href="/"><FaArrowLeft className='text-4xl fixed border border-white top-10 left-10 animate-bounce'/></a>
    <div className='flex flex-col justify-between items-center text-center '>

       

       <h1 className='text-center font-bold pt-10 text-4xl tracking-widest'>MY WORK</h1>
   
       

   
{/*    
       <div className='flex gap-4 mt-4'>
         <a href="#published" className="animate-bounce text-center  text-primary hover:text-secondary   cursor-pointer border-primary border hover:bg-primary rounded px-3 py-1 ">
           Published Articles
         </a>
   
        </div> */}
       
 
       <Published />
    
    </div>
   
  

    
     
    
 
      

      
      
   
    </div>
  )
}

export default PortfolioComponent

