import React from 'react';

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}>
            <h1 className='text-3xl font-bold group-hover:text-teal-400 transition-all'> 
                {text}
                </h1>
            <div className='w-40 h-2 bg-teal-400 rounded-full'></div>
            <div className='w-40 h-2 bg-yellow-300 rounded-full translate-x-2'></div>
         </div>
  )
}
