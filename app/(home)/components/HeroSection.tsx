"use client";
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link'
import React from 'react'
import Title from './Title';


export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className=' space-y-10 text-center lg:text-left'>
      <h1 className="text-4xl lg:text-7xl font-bold">
           Hey ! 🙌
            <br /> <span className='underline underline-offset-8 decoration-teal-400'>
               {"I'm Adnan."}
               </span>
        
         </h1>
         
         <h2 className='text-3xl text-bold'> CS @ University at Buffalo </h2>
         <p className='md:w-96 text-lg text-gray-300'>
            {"I'm Muntashir Adnan, currently an sophomore majoring in Computer Science 🧪 I'm a up incoming developer wanting users to have a easier life🤝. I love video games and even compete on a UB team🕹️, and I've been really trying to get into video editing🎥!"}
         </p>
         
         <Link href={"mailto:muntashiradnan23@gmail.com"} className='inline-block group'>
         <Title text="Contact Me 📭"/>
         </Link>
         </div>
         <div className='space-y-3 text-center '>
         <BackgroundGradient className="rounded-[22px] max-w-sm sm:p-10 bg-white dark:bg-zinc-900">
         <img src="/images/pic.jpg" alt='Picture of Muntashir Adnan' className=" rounded-lg "/>
         
         <div className=' absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'></div>
         <MovingBorderBtn borderRadius='0.5rem' className="p-3 font-semibold ">
            <p>💡 Avaliable for Work</p>
         </MovingBorderBtn>
      </BackgroundGradient>
         </div>
    </div>
  )
}
