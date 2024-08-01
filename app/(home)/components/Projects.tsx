import React from 'react'
import { SiAdobephotoshop, SiBlender, SiDavinciresolve, SiMyanimelist, SiNextdotjs, SiReact, SiShadcnui, SiTailwindcss, SiWindows10 } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
  const projects = [
    {
        title: "Personal Website",
        tech:[SiNextdotjs, SiReact, SiTailwindcss, SiShadcnui],
        link:"http://localhost:3000",
        cover:"/images/image (13).png",
        background:"bg-teal-500",
    },
    {
        title: "Valorant Edit",
        tech:[SiDavinciresolve, SiAdobephotoshop, SiBlender],
        link:"https://www.youtube.com/watch?v=Rc661FZNqcI",
        cover:"/images/destroy lone omen 7 (1).png",
        background:"bg-yellow-500",
    },
  ]
  
    return (
    <div className="py-10 p-5 sm:p-0">
        <Title 
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20">
            {projects.map((project, index) => {
                return <Link href={project.link} key={index}> 
                <div className={cn(
                    "p-5 rounded-md", 
                    project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'
                >
                    <div className=' space-y-5'>
                    <h1 className='text-2xl font-bold '>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                        {project.tech.map((Icon, index) => {
                            return <Icon className='size-8' key={index}/>;
                        })}
                    </div>
                    </div>
                    </DirectionAwareHover>  
                    </div>      
                </Link>
            })}


        </div>
    </div>
  )
}
