import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
    const socials = [
        {
            link:"https://www.linkedin.com/in/muntashir-adnan-ab6918254/",
            label:"Linkedin",
            Icon: SiLinkedin,
        },
        {
            link:"https://github.com/BigMonkry",
            label:"Github",
            Icon: SiGithub,
        },
        {
            link:"https://www.youtube.com/@bigmonkry/featured",
            Label:"Youtube",
            Icon: SiYoutube,
        }
    ];
  return (
    <nav className={cn(' py-10 flex justify-between items-center animate-move-down', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-teal-400 -rotate-2'>
            Muntashir Adnan ☕
            </h1>
        <div className="flex item-center gap-5">
            {socials.map((social,index)=>{
                const Icon = social.Icon

                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className='size-5 hover:scale-125 transition-all' />
                </Link>

            })}
        </div>
        
    </nav>
  )
}
